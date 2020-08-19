using System.Text;
using Domain;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Model.Identity;

namespace Endpoint.Extentions
{
    public static class IdentityServiceExt
    {
        public static IServiceCollection AddIdentityService(this IServiceCollection services, IConfiguration config)
        {
            var builder = services.AddIdentityCore<AppUser>();

            builder = new IdentityBuilder(builder.UserType, builder.Services);
            builder.AddEntityFrameworkStores<StoreContext>();
            builder.AddSignInManager<SignInManager<AppUser>>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(
                    opt => {
                        opt.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuerSigningKey = true,
                            ValidateIssuer = true,
                            ValidateAudience = false,
                            ValidIssuer = config["Token:Issuer"],
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Token:Key"]))
                        };
                    }
                );

            return services;
        }
    }
}