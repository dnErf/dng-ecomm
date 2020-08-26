using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Model.OrderAggregate;

namespace Domain.Configurations
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.OwnsOne (
                r => r.ShipToAddress,
                a => { a.WithOwner(); }
            );
            builder.Property(p => p.Status)
                .HasConversion (
                    ct => ct.ToString(),
                    cf => (OrderStatus) Enum.Parse(typeof(OrderStatus), cf)
                );
        }
    }
}