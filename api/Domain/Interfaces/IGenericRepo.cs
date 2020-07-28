using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Model;

namespace Domain.Interfaces
{
    public interface IGenericRepo<T> where T : BaseModel
    {
        Task<T> GetByIdAsync(int id);
        Task<T> GetWithFrame(IFrame<T> frame);
        Task<IList<T>> GetAllAsync();
        Task<IList<T>> GetAllWithFrame(IFrame<T> frame);
        // Task<int> CountAsync(IFrame<T> frame);
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        
    }
}
