using Model;

namespace Domain.Frames
{
    public class ProductsWithBrandAndCategory : BaseFrame<Product>
    {
        public ProductsWithBrandAndCategory()
        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductCategory);
        }
        public ProductsWithBrandAndCategory(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductCategory);
        }
    }
}