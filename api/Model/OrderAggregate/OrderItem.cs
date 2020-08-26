namespace Model.OrderAggregate
{
    public class OrderItem : BaseModel
    {
        public OrderItem()
        { }
        public OrderItem(ItemOrdered itemOrdered, double price, int quantity)
        { 
            ItemOrdered = itemOrdered;
            Price = price;
            Quantity = quantity;
        }
        public ItemOrdered ItemOrdered { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
    }
}