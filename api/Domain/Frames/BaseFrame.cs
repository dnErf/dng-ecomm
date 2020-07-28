using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Domain.Interfaces;

namespace Domain.Frames
{
    public class BaseFrame<T> : IFrame<T>
    {
        public BaseFrame()
        { }
        public BaseFrame(Expression<Func<T, bool>> criteria)
        { Criteria = criteria; }
        public Expression<Func<T, bool>> Criteria { get; }

        public List<Expression<Func<T, object>>> Includes 
            { get; } = new List<Expression<Func<T, object>>>();
        
        protected void AddInclude(Expression<Func<T, object>> includeExpression)
        {
            Includes.Add(includeExpression);
        }
    }
}
