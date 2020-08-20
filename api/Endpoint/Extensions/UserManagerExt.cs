using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Model.Identity;

namespace Endpoint.Extentions
{
    public static class UserManagerExt
    {
        public static async Task<AppUser> FindByUserByClaimsPrincipleWithAddressAsync(this UserManager<AppUser> mngr, ClaimsPrincipal user)
        {
            var email = user?.Claims?.FirstOrDefault(u => u.Type == ClaimTypes.Email)?.Value;
            return await mngr.Users.Include(u => u.Address).SingleOrDefaultAsync(u => u.Email == email);
        }
        public static async Task<AppUser> FindByEmailFromClaimsPrinciple(this UserManager<AppUser> mngr, ClaimsPrincipal user)
        {
            var email = user?.Claims?.FirstOrDefault(u => u.Type == ClaimTypes.Email)?.Value;
            return await mngr.Users.SingleOrDefaultAsync(u => u.Email == email);
        }
    }
}