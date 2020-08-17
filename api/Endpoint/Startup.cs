using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using Domain.Interfaces;
using Endpoint.Helpers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using StackExchange.Redis;

namespace Endpoint
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<StoreContext>(
                // o => o.UseSqlite(Configuration.GetValue<string>("DATABASE_URL"))
                o => o.UseNpgsql(Environment.GetEnvironmentVariable("PG_URL"))
            );
            // Configuration.GetValue<string>("env:DS_REDIS")
            // Environment.GetEnvironmentVariable("DS_REDIS")
            // Configuration.GetValue<string>("REDIS_URL")
            foreach(var a in Configuration.GetChildren())
            {
                Console.WriteLine($"{a.Key} - {a.Value}");
            }
            // Console.WriteLine(Environment.GetEnvironmentVariable("DS_REDIS").ToString());
            services.AddSingleton<IConnectionMultiplexer>(
                c => ConnectionMultiplexer.Connect(ConfigurationOptions.Parse(Configuration.GetValue<string>("REDIS_URL"), true))
            );
            services.AddCors(
                o => {
                    o.AddPolicy("DevPolicy", p => {
                        p.WithOrigins("http://localhost:4200")
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
                }
            );
            services.AddAutoMapper(typeof(MappingProfiles));
            services.AddScoped<IBasketRepo, BasketRepo>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors("DevPolicy");
            }

            // app.UseHttpsRedirection();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapFallbackToController("Index", "Fallback");
            });
        }
    }
}
