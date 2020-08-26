using Model.OrderAggregate;

namespace Domain.Frames
{
    public class OrdersWithItemsAndOrderingFrame : BaseFrame<Order>
    {
        public OrdersWithItemsAndOrderingFrame(string email) : base(o => o.BuyerEmail == email)
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
            AddOrderByDsc(o => o.OrderDate);
        }
        public OrdersWithItemsAndOrderingFrame(int id, string email) : base (o => o.Id == id && o.BuyerEmail == email)
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
        }
    }
}