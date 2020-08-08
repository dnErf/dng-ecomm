using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Frames;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Model;

namespace Domain
{
    public class GenericRepo<T> : IGenericRepo<T> where T : BaseModel
    {
        private readonly StoreContext _context;
        public GenericRepo(StoreContext context)
        { _context = context; }
        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
        }

        public async Task<int> CountAsync(IFrame<T> frame)
        {
            return await ApplyFrame(frame).CountAsync();
        }

        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
        }

        public async Task<IList<T>> GetAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<IList<T>> GetAllWithFrame(IFrame<T> frame)
        {
            return await ApplyFrame(frame).ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task<T> GetWithFrame(IFrame<T> frame)
        {
            return await ApplyFrame(frame).FirstOrDefaultAsync();
        }

        public void Update(T entity)
        {
            _context.Set<T>().Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }
        private IQueryable<T> ApplyFrame(IFrame<T> frame)
        {
            return FrameEvaluator<T>.GetQuery(_context.Set<T>().AsQueryable(), frame);
        }
    }
}
