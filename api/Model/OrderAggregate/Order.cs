using System;
using System.Collections.Generic;

namespace Model.OrderAggregate
{
    public class Order : BaseModel
    {
        public Order()
        { } 
        public Order (
            List<OrderItem> orderItems,
            string buyerEmail,
            Address shipToAddress,
            DeliveryMethod deliveryMethod,
            double subtotal,
            string paymentIntentId
        ) { 
            BuyerEmail = buyerEmail;
            ShipToAddress = shipToAddress;
            DeliveryMethod = deliveryMethod;
            OrderItems = orderItems;
            SubTotal = subtotal;
            PaymentIntentId = paymentIntentId;
        }
        public string BuyerEmail { get; set; }
        public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now;
        public Address ShipToAddress { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }
        public List<OrderItem> OrderItems { get; set; }
        public double SubTotal { get; set; }
        public OrderStatus Status { get; set; } = OrderStatus.Pending;
        public string PaymentIntentId { get; set; }
        public double GetTotal()
        {
            return SubTotal + DeliveryMethod.Price;
        }
    }
}