using System.IO;
using System.Threading.Tasks;
using Domain.Interfaces;
using Endpoint.Helpers.Error;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Model;
using Stripe;
using OrderAggregate = Model.OrderAggregate;

namespace Endpoint.Controllers
{
    public class PaymentsController : ApiController
    {
        private const string whSecret = "";
        private readonly IPaymentService _servPayment;
        private readonly ILogger<IPaymentService> _logger;

        public PaymentsController(IPaymentService servPayment, ILogger<IPaymentService> logger)
        {
            _servPayment = servPayment;
            _logger = logger;
        }
        [Authorize]
        [HttpPost("{basketId")]
        public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
        {
            var basket = await _servPayment.CreateOrUpdatePaymentIntent(basketId);

            if (basket == null)
                return BadRequest(new ApiResponse(400, ""));

            return basket;
        }
        [HttpPost("webhook")]
        public async Task<ActionResult> StripeWebhook()
        {
            var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();
            
            var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"], whSecret);

            PaymentIntent intent;
            OrderAggregate.Order order;

            switch (stripeEvent.Type)
            {
                case "payment_intent.succeeded":
                    intent = (PaymentIntent) stripeEvent.Data.Object;
                    order = await _servPayment.UpdateOrderPaymentSucceed(intent.Id);
                    _logger.LogInformation($"{intent.Id} payment succeeded paying {order.Id}");
                    break;
                case "payment_intent.payment_failed":
                    intent = (PaymentIntent) stripeEvent.Data.Object;
                    order = await _servPayment.UpdateOrderPaymentFailed(intent.Id);
                    _logger.LogInformation($"{intent.Id} payment failed paying {order.Id}");
                    break;
            }

            return new EmptyResult();
        }
    }
}