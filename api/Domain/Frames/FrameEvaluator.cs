using System;
using System.Linq;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Model;

namespace Domain.Frames
{
    public class FrameEvaluator<TEntity> where TEntity : BaseModel
    {
        public static IQueryable<TEntity> GetQuery(IQueryable<TEntity> inputQuery, IFrame<TEntity> frame)
        {
            var query = inputQuery;

            if (frame.Criteria != null)
            {
                query = query.Where(frame.Criteria);
            }

            if (frame.OrderByAsc != null)
            {
                query = query.OrderBy(frame.OrderByAsc);
            }

            if (frame.OrderByDsc != null)
            {
                query = query.OrderByDescending(frame.OrderByDsc);
            }

            if (frame.IsPagingEnabled)
            {
                query = query.Skip(frame.Skip).Take(frame.Take);
            }          

            query = frame.Includes.Aggregate(query, (current, include) => current.Include(include));

            return query;  
        }
    }
}
