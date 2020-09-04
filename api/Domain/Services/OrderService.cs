using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Frames;
using Domain.Interfaces;
using Model;
using Model.OrderAggregate;

namespace Domain.Services
{
    public class OrderService : IOrderService
    {
        private readonly IBasketRepo _basketRepo;
        private readonly IPaymentService _servPayment;
        private readonly IUnitOfWork _uow;

        public OrderService(IBasketRepo basketRepo, IUnitOfWork uow, IPaymentService servPayment)
        {
            _basketRepo = basketRepo;
            _servPayment = servPayment;
            _uow = uow;
        }

        public async Task<Order> CreateOrderAsync(string buyerEmail, int deliveryMethodId, string basketId, Address shippingAddress)
        {
            var basket = await _basketRepo.GetBasketAsync(basketId);

            var items = new List<OrderItem>();
            foreach (var item in basket.Items)
            {
                var productItem = await _uow.Repo<Product>().GetByIdAsync(item.Id);
                var itemOrdered = new ItemOrdered(productItem.Id, productItem.Name, productItem.PictureUrl);
                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
                items.Add(orderItem);
            }

            var deliveryMethod = await _uow.Repo<DeliveryMethod>().GetByIdAsync(deliveryMethodId);
            var subtotal = items.Sum(i => i.Price * i.Quantity);

            // check to see if order exists
            var frame = new OrderByPaymentIntentIdFrame(basket.PaymentIntentId);
            var existingOrder = await _uow.Repo<Order>().GetWithFrame(frame);

            if (existingOrder != null)
            {
                _uow.Repo<Order>().Delete(existingOrder);
                await _servPayment.CreateOrUpdatePaymentIntent(basket.PaymentIntentId);
            }
            
            var order = new Order(items, buyerEmail, shippingAddress, deliveryMethod, subtotal, basket.PaymentIntentId);
            _uow.Repo<Order>().Add(order);

            if (await _uow.Complete() <= 0) 
                return null;

            await _basketRepo.DeleteBasketAsync(basketId);

            return order;
        }

        public async Task<IList<DeliveryMethod>> GetDeliveryMethodsAsync()
        {
            return await _uow.Repo<DeliveryMethod>().GetAllAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var frame = new OrdersWithItemsAndOrderingFrame(id, buyerEmail);
            return await _uow.Repo<Order>().GetWithFrame(frame);
        }

        public async Task<IList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var frame = new OrdersWithItemsAndOrderingFrame(buyerEmail);
            return await _uow.Repo<Order>().GetAllWithFrame(frame);
        }
    }
}