using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Model.Dtos
{
    public class BasketToReturn
    {
        [Required]
        public string Id { get; set; }
        public List<ItemToReturn> Items { get; set; }
    }
}