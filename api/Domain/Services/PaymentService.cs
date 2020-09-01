using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Frames;
using Domain.Interfaces;
using Microsoft.Extensions.Configuration;
using Model;
using Stripe;
using OrderAggregate = Model.OrderAggregate;

namespace Domain.Services
{
    public class PaymentService : IPaymentService
    {
        private readonly IBasketRepo _basketRepo;
        private readonly IUnitOfWork _uow;
        private readonly IConfiguration _config;

        public PaymentService(IBasketRepo basketRepo, IUnitOfWork uow, IConfiguration config)
        {
            _basketRepo = basketRepo;
            _uow = uow;
            _config = config;
        }
        public async Task<CustomerBasket> CreateOrUpdatePaymentIntent(string basketId)
        {
            StripeConfiguration.ApiKey = _config.GetValue<string>("StripeKey:Secret");

            var basket = await _basketRepo.GetBasketAsync(basketId);

            if (basket == null)
                return null;
            
            var shippingPrice = 0d;

            if (basket.DeliveryMethodId.HasValue)
            {
                var deliveryMethod = await _uow.Repo<OrderAggregate.DeliveryMethod>().GetByIdAsync((int)basket.DeliveryMethodId);
                shippingPrice = deliveryMethod.Price;
            }

            foreach (var item in basket.Items)
            {
                var productItem = await _uow.Repo<Model.Product>().GetByIdAsync(item.Id);
                if (item.Price != productItem.Price)
                {
                    item.Price = productItem.Price;
                }
            }

            var service = new PaymentIntentService();
            PaymentIntent intent;

            if (string.IsNullOrEmpty(basket.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = (long) basket.Items.Sum(i => i.Quantity * (i.Price * 100)) + (long) shippingPrice * 100,
                    Currency = "usd",
                    PaymentMethodTypes = new List<string> { "card" }
                };

                intent = await service.CreateAsync(options);
                basket.PaymentIntentId = intent.Id;
                basket.ClientSecret = intent.ClientSecret;
            }
            else 
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = (long) basket.Items.Sum(i => i.Quantity * (i.Price * 100)) + (long) shippingPrice * 100
                };

                await service.UpdateAsync(basket.PaymentIntentId, options);
            }

            await _basketRepo.UpdateBasketAsync(basket);
            return basket;
        }

        public async Task<OrderAggregate.Order> UpdateOrderPaymentFailed(string paymentIntentId)
        {
            var frame = new OrderByPaymentIntentIdFrame(paymentIntentId);
            var order = await _uow.Repo<OrderAggregate.Order>().GetWithFrame(frame);

            if (order == null)
                return null;

            order.Status = OrderAggregate.OrderStatus.PaymentFailed;
            await _uow.Complete();

            return order;
        }

        public async Task<OrderAggregate.Order> UpdateOrderPaymentSucceed(string paymentIntentId)
        {
            var frame = new OrderByPaymentIntentIdFrame(paymentIntentId);
            var order = await _uow.Repo<OrderAggregate.Order>().GetWithFrame(frame);

            if (order == null)
                return null;

            order.Status = OrderAggregate.OrderStatus.PaymentReceived;
            _uow.Repo<OrderAggregate.Order>().Update(order);
            await _uow.Complete();

            return order;
        }
    }
}