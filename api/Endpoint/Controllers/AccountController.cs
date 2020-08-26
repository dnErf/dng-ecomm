using System.Threading.Tasks;
using AutoMapper;
using Domain.Interfaces;
using Endpoint.Extentions;
using Endpoint.Helpers.Error;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Model.Dtos;
using Model.Identity;

namespace Endpoint.Controllers
{
    public class AccountController : ApiController
    {
        private readonly IMapper _mapper;
        private readonly ITokenService _servToken;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;

        public AccountController(
                IMapper mapper,
                ITokenService servToken,
                SignInManager<AppUser> signInManager,
                UserManager<AppUser> userManager
            )
        {
            _mapper = mapper;
            _servToken = servToken;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpGet("didEmailExists")]
        public async Task<ActionResult<bool>> CheckEmailExistsAsync([FromQuery] string email)
        {
            return await _userManager.FindByEmailAsync(email) != null;
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserToReturn>> GetCurrentUser()
        {
            var user = await _userManager.FindByEmailFromClaimsPrinciple(HttpContext.User);
            return new UserToReturn
            {
                Email = user.Email, Token = _servToken.CreateToken(user), DisplayName = user.DisplayName
            };
        }

        [Authorize]
        [HttpGet("address")]
        public async Task<ActionResult<AddressDTO>> GetUserAddress()
        {
            var user = await _userManager.FindByUserByClaimsPrincipleWithAddressAsync(HttpContext.User);
            return _mapper.Map<Address, AddressDTO>(user.Address);
        }

        [Authorize]
        [HttpPut("address")]
        public async Task<ActionResult<AddressDTO>> UpdateUserAddress(AddressDTO address)
        {
            var user = await _userManager.FindByUserByClaimsPrincipleWithAddressAsync(HttpContext.User);
            user.Address = _mapper.Map<AddressDTO, Address>(address);

            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded)
                return Ok(_mapper.Map<Address, AddressDTO>(user.Address));

            return BadRequest("problem updating the user");
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserToReturn>> Login(LoginDTO login)
        {
            var user = await _userManager.FindByEmailAsync(login.Email);

            if (user == null)
                return BadRequest("user not recognize");

            var result = await _signInManager.CheckPasswordSignInAsync(user, login.Password, false);

            if (!result.Succeeded)
                return BadRequest("user not recognize");

            return new UserToReturn
            {
                Email = user.Email, Token = _servToken.CreateToken(user), DisplayName = user.DisplayName
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserToReturn>> Register(RegisterDTO registrant)
        {
            if (CheckEmailExistsAsync(registrant.Email).Result.Value)
            {
                return new BadRequestObjectResult(new ApiValidationResponse { Errors = new []{"Email address is in use"} });
            }

            var user = new AppUser
            {
                DisplayName = registrant.DisplayName,
                Email = registrant.DisplayName,
                UserName = registrant.Email
            };

            var result = await _userManager.CreateAsync(user, registrant.Password);

            if (!result.Succeeded)
                return BadRequest("request not acknowledge");

            return new UserToReturn
            {
                DisplayName = user.DisplayName, Token = _servToken.CreateToken(user), Email = user.Email
            };
        }

    }
}