using AutoMapper;
using Model;
using Model.Dtos;
using Model.Identity;

namespace Endpoint.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturn>()
                .ForMember(d => d.ProductBrand, o => o.MapFrom(s => s.ProductBrand.Name))
                .ForMember(d => d.ProductCategory, o => o.MapFrom(s => s.ProductCategory.Name))
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ProductUrlResolver>());
            CreateMap<Address, AddressToReturn>().ReverseMap();
            CreateMap<BasketToReturn, CustomerBasket>();
            CreateMap<ItemToReturn, BasketItem>();
        }
    }
}