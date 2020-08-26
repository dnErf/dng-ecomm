using System.ComponentModel.DataAnnotations;

namespace Model.OrderAggregate
{
    public class ItemOrdered
    {
        public ItemOrdered()
        {}
        public ItemOrdered(int itemId, string productName, string pictureUrl)
        {
            ItemId = itemId;
            ProductName = productName;
            PictureUrl = pictureUrl;
        }
        [Key]
        public int ItemId { get; set; }
        public string ProductName { get; set; }
        public string PictureUrl { get; set; }
    }
}