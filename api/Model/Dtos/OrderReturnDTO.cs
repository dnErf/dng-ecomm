using System;
using System.Collections.Generic;
using Model.OrderAggregate;

namespace Model.Dtos
{
    public class OrderReturnDTO
    {
        public int Id { get; set; }
        public string BuyerEmail { get; set; }
        public DateTimeOffset OrderDate { get; set; }
        public Address ShipToAddress { get; set; }
        public string DeliveryMethod { get; set; }
        public double ShippingPrice { get; set; }
        public List<OrderItemDTO> OrderItems { get; set; }
        public double SubTotal { get; set; }
        public double Total { get; set; }
        public string Status { get; set; }
    }
}