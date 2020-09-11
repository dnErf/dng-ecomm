using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Frames;
using Domain.Interfaces;
using Endpoint.Helpers;
using Endpoint.Helpers.Error;
using Microsoft.AspNetCore.Http;
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
        [Cached(1200)][HttpGet("brands")]
        public async Task<ActionResult<IList<ProductBrand>>> GetProductBrands()
        {
            return Ok(await _uow.Repo<ProductBrand>().GetAllAsync());
        }
        [Cached(600)][HttpGet("categories")]
        public async Task<ActionResult<IList<ProductCategory>>> GetProductCategories()
        {
            return Ok(await _uow.Repo<ProductCategory>().GetAllAsync());
        }

        [Cached(600)][HttpGet]
        public async Task<ActionResult<IList<ProductToReturn>>> GetProducts([FromQuery]FrameParams frameParams)
        {
            var products = await _uow.Repo<Product>().GetAllWithFrame (
                new ProductsWithBrandAndCategory(frameParams)
            );
            var totalItems = await _uow.Repo<Product>().CountAsync (
                new ProductsWithFiltersForCount(frameParams)
            );
            var data = _mapper.Map<IList<Product>, IList<ProductToReturn>>(products);
            return Ok (
                new Pagination<ProductToReturn>(frameParams.PageIndex, frameParams.PageSize, totalItems, data)
            );
        }
        [Cached(600)][HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
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