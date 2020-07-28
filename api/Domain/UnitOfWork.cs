using System;
using System.Collections;
using System.Threading.Tasks;
using Domain.Interfaces;
using Model;

namespace Domain
{
    public class UnitOfWork : IUnitOfWork
    {
        private Hashtable _repos;
        private readonly StoreContext _context;
        public UnitOfWork(StoreContext context)
        { _context = context; }
        public async Task<int> Complete()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IGenericRepo<TEntity> Repo<TEntity>() where TEntity : BaseModel
        {
            // hash table of executing repositories
            if (_repos == null)
                _repos = new Hashtable();
            
            var type = typeof(TEntity).Name;

            if (!_repos.ContainsKey(type))
            {
                var repoType = typeof(GenericRepo<>);
                var repoInstance = Activator.CreateInstance(repoType.MakeGenericType(typeof(TEntity)), _context);
                _repos.Add(type, repoInstance);
            }

            return (IGenericRepo<TEntity>) _repos[type];
        }
    }
}
