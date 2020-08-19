using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Domain.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Model.Identity;

namespace Endpoint
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            // CreateHostBuilder(args).Build().Run();
            var host = CreateHostBuilder(args).Build();
            using (var scoped = host.Services.CreateScope())
            {
                var services = scoped.ServiceProvider;
                var loggerFactory = services.GetRequiredService<ILoggerFactory>();
                try
                {
                    var userManager = services.GetRequiredService<UserManager<AppUser>>();
                    var context = services.GetRequiredService<StoreContext>();
                    await context.Database.MigrateAsync();
                    await StoreContextSeed.InvokeAsync(context, loggerFactory, userManager);
                }
                catch (Exception ex)
                {
                    var logger = loggerFactory.CreateLogger<Program>();
                    logger.LogError(ex, "error occured during migration");
                }
            }
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
