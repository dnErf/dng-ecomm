using Model;

namespace Domain.Frames
{
    public class ProductsWithFiltersForCount : BaseFrame<Product>
    {
        public ProductsWithFiltersForCount(FrameParams frameParams)
            : base (
                x =>
                    (string.IsNullOrEmpty(frameParams.Search) || x.Name.ToLower().Contains(frameParams.Search)) 
                    && (!frameParams.BrandId.HasValue || x.ProductBrandId == frameParams.BrandId)
                    && (!frameParams.CategoryId.HasValue || x.ProductCategoryId == frameParams.CategoryId)
            )
        {}
    }
}