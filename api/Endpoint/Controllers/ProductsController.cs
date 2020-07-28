using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Frames;
using Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Model;
using Model.Dtos;

namespace Endpoint.Controllers
{
    public class ProductsController : ApiController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _uow;
        public ProductsController(IUnitOfWork uow, IMapper mapper)
        {
            _mapper = mapper;
            _uow = uow;
        }
        [HttpGet]
        public async Task<ActionResult<IList<ProductToReturn>>> GetProducts()
        {
            var products = await _uow.Repo<Product>().GetAllWithFrame (
                new ProductsWithBrandAndCategory()
            );
            return Ok (
                _mapper.Map<IList<Product>, IList<ProductToReturn>>(products)
            );
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductToReturn>> GetProduct(int id)
        {
            var product = await _uow.Repo<Product>().GetWithFrame(
                new ProductsWithBrandAndCategory(id)
            );
            return Ok (
                _mapper.Map<Product, ProductToReturn>(product)
            );
        }
    }
}