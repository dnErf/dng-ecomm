using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Model;
using Model.Identity;
using Model.OrderAggregate;

namespace Domain.Data
{
    public class StoreContextSeed
    {
        public static async Task InvokeAsync(
                StoreContext context, 
                ILoggerFactory loggerFactory,
                UserManager<AppUser> userManager
            )
        {
            try
            {
                if (!context.ProductBrands.Any())
                {
                    var brandsRaw = File.ReadAllText("../Domain/Seeds/brands.json");
                    var brandsData = JsonSerializer.Deserialize<List<ProductBrand>>(brandsRaw);
                    foreach (var item in brandsData)
                    {
                        context.ProductBrands.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if (!context.DeliveryMethods.Any())
                {
                    var deliveryRaw = File.ReadAllText("../Domain/Seeds/delivery.json");
                    var deliveryData = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryRaw);
                    foreach (var item in deliveryData)
                    {
                        context.DeliveryMethods.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if (!context.ProductCategories.Any())
                {
                    var categoriesRaw = File.ReadAllText("../Domain/Seeds/categories.json");
                    var categoriesData = JsonSerializer.Deserialize<List<ProductCategory>>(categoriesRaw);
                    foreach (var item in categoriesData)
                    {
                        context.ProductCategories.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if (!context.Products.Any())
                {
                    var productsRaw = File.ReadAllText("../Domain/Seeds/products.json");
                    var productsData = JsonSerializer.Deserialize<List<Product>>(productsRaw);
                    foreach (var item in productsData)
                    {
                        context.Products.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContext>();
                logger.LogError(ex.Message);
            }
        }
    }
}