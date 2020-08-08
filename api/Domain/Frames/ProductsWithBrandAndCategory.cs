using Model;

namespace Domain.Frames
{
    public class ProductsWithBrandAndCategory : BaseFrame<Product>
    {
        public ProductsWithBrandAndCategory(FrameParams frameParams)
            : base (
                x =>
                    (string.IsNullOrEmpty(frameParams.Search) || x.Name.ToLower().Contains(frameParams.Search)) 
                    && (!frameParams.BrandId.HasValue || x.ProductBrandId == frameParams.BrandId)
                    && (!frameParams.CategoryId.HasValue || x.ProductCategoryId == frameParams.CategoryId)
            )
        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductCategory);
            ApplyPaging(frameParams.PageSize * (frameParams.PageIndex - 1), frameParams.PageSize);

            if (!string.IsNullOrEmpty(frameParams.Sort))
            {
                switch (frameParams.Sort)
                {
                    case "priceAsc":
                        AddOrderByAsc(p => p.Price);
                        break;
                    case "priceDsc":
                        AddOrderByDsc(p => p.Price);
                        break;
                    default:
                        AddOrderByAsc(n => n.Name);
                        break;
                }
            }

        }
        public ProductsWithBrandAndCategory(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductCategory);
        }
    }
}