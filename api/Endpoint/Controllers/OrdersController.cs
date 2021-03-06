using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Interfaces;
using Endpoint.Helpers.Error;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Model.Dtos;
using Model.OrderAggregate;

namespace Endpoint.Controllers
{
    [Authorize]
    public class OrdersController : ApiController
    {
        private readonly IMapper _mapper;
        private readonly IOrderService _servOrder;

        public OrdersController(IMapper mapper, IOrderService servOrder)
        {
            _mapper = mapper;
            _servOrder = servOrder;
        }
        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(OrderDTO orderDTO)
        {
            var email = HttpContext.User?.Claims?.FirstOrDefault(c => c.Type == ClaimTypes.Email).Value;
            var address = _mapper.Map<AddressDTO, Address>(orderDTO.ShipToAddress);
            var order = await _servOrder.CreateOrderAsync(email, orderDTO.DeliveryMethodId, orderDTO.BasketId, address);

            if (order == null)
                return BadRequest(new ApiResponse(400, "Problem creating order"));

            return Ok(order);
        }
        [HttpGet]
        public async Task<ActionResult<IList<OrderDTO>>> GetOrdersForUser()
        {
            var email = HttpContext.User?.Claims?.FirstOrDefault(c => c.Type == ClaimTypes.Email).Value;
            var orders = await _servOrder.GetOrdersForUserAsync(email);

            return Ok(
                _mapper.Map<IList<Order>, IList<OrderReturnDTO>>(orders)
            );
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderReturnDTO>> GetOrderByIdForUser(int id)
        {
            var email = HttpContext.User?.Claims?.FirstOrDefault(c => c.Type == ClaimTypes.Email).Value;
            var order = await _servOrder.GetOrderByIdAsync(id, email);

            if (order == null)
                return NotFound(new ApiResponse(404));

            return Ok(_mapper.Map<Order, OrderReturnDTO>(order));
        }
        [HttpGet("deliveryMethods")]
        public async Task<ActionResult<IList<DeliveryMethod>>> GetDeliveryMethods()
        {
            return Ok(await _servOrder.GetDeliveryMethodsAsync());
        }
    }
}