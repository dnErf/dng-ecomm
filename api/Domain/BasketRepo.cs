using System;
using System.Text.Json;
using System.Threading.Tasks;
using Domain.Interfaces;
using Model;
using StackExchange.Redis;

namespace Domain
{
    public class BasketRepo : IBasketRepo
    {
        private readonly IDatabase _redis;

        public BasketRepo(IConnectionMultiplexer redis)
        {
            _redis = redis.GetDatabase();
        }

        public async Task<bool> DeleteBasketAsync(string basketId)
        {
            return await _redis.KeyDeleteAsync(basketId);
        }

        public async Task<CustomerBasket> GetBasketAsync(string basketId)
        {
            var data = await _redis.StringGetAsync(basketId);
            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<CustomerBasket>(data);
        }

        public async Task<CustomerBasket> UpdateBasketAsync(CustomerBasket basket)
        {
            var nbasket = await _redis.StringSetAsync(
                basket.Id, JsonSerializer.Serialize(basket), TimeSpan.FromDays(1)
            );
            if (!nbasket) return null;
            return await GetBasketAsync(basket.Id);
        }
    }
}
