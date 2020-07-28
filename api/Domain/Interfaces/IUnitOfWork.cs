using System;
using System.Threading.Tasks;
using Model;

namespace Domain.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IGenericRepo<TEntity> Repo<TEntity>() where TEntity : BaseModel;
        Task<int> Complete();
    }
}
