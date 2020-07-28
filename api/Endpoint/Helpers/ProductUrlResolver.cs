using AutoMapper;
using Microsoft.Extensions.Configuration;
using Model;
using Model.Dtos;

namespace Endpoint.Helpers
{
    public class ProductUrlResolver : IValueResolver<Product, ProductToReturn, string>
    {
        private readonly IConfiguration _config;
        public ProductUrlResolver(IConfiguration configuration)
        {
            _config = configuration;
        }
        public string Resolve(Product source, ProductToReturn destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.PictureUrl))
            {
                return _config["ApiUrl"] + source.PictureUrl;
            }
            return null;
        }
    }
}