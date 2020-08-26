using AutoMapper;
using Microsoft.Extensions.Configuration;
using Model.OrderAggregate;
using Model.Dtos;

namespace Endpoint.Helpers
{
    public class OrderItemUrlResolver : IValueResolver<OrderItem, OrderItemDTO, string>
    {
        private readonly IConfiguration _config;
        public OrderItemUrlResolver(IConfiguration configuration)
        {
            _config = configuration;
        }
        public string Resolve(OrderItem source, OrderItemDTO destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.ItemOrdered.PictureUrl))
            {
                return _config["ApiUrl"] + source.ItemOrdered.PictureUrl;
            }
            return null;
        }
    }
}