using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Model.OrderAggregate;

namespace Domain.Configurations
{
    public class OrderItemConfiguration : IEntityTypeConfiguration<OrderItem>
    {
        public void Configure(EntityTypeBuilder<OrderItem> builder)
        {
            builder.OwnsOne(n => n.ItemOrdered, a => { a.WithOwner(); });

            // builder.Property(p => p.Price)
            //     .HasColumnType("decimal(18, 2");
        }
    }
}