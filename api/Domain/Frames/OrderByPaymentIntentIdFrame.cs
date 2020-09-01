using Model.OrderAggregate;

namespace Domain.Frames
{
    public class OrderByPaymentIntentIdFrame : BaseFrame<Order>
    {
        public OrderByPaymentIntentIdFrame(string paymentIntentId)
            : base(o => o.PaymentIntentId == paymentIntentId)
        { }
    }
}