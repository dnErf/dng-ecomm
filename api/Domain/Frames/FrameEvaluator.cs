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

            query = frame.Includes.Aggregate(query, (current, include) => current.Include(include));

            return query;  
        }
    }
}
