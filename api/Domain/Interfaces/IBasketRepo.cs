using System.Threading.Tasks;
using Model;

namespace Domain.Interfaces
{
    public interface IBasketRepo
    {
        Task<bool> DeleteBasketAsync (string basketId);
        Task<CustomerBasket> GetBasketAsync (string basketId);
        Task<CustomerBasket> UpdateBasketAsync (CustomerBasket basket);
    }
}