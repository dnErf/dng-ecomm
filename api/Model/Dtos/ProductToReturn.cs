namespace Model.Dtos
{
    public class ProductToReturn : BaseModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public string ProductBrand { get; set; }
        public string ProductCategory { get; set; }
    }
}