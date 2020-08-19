using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Model;
using Model.Identity;

namespace Domain
{
    public class StoreContext : IdentityDbContext<AppUser>
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        { }
        public DbSet<Product> Products { get; set;}
        public DbSet<ProductBrand> ProductBrands { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
