using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Model.Dtos
{
    public class BasketReturnDTO
    {
        [Required]
        public string Id { get; set; }
        public List<ItemToReturn> Items { get; set; }
        public int? DeliveryMethodId { get; set; }
        public string ClientSecret { get; set; }
        public string PaymentIntentId { get; set; }
        public double ShippingPrice { get; set; }
    }
}