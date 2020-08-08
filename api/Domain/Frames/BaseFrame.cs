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

        public Expression<Func<T, object>> OrderByAsc 
            { get; private set; }

        public Expression<Func<T, object>> OrderByDsc 
            { get; private set; }

        public int Take 
            { get; private set; }

        public int Skip 
            { get; private set; }

        public bool IsPagingEnabled 
            { get; private set; }

        protected void AddInclude(Expression<Func<T, object>> includeExpression)
        {
            Includes.Add(includeExpression);
        }
        protected void AddOrderByAsc(Expression<Func<T, object>> orderbyExpression)
        {
            OrderByAsc = orderbyExpression;
        }
        protected void AddOrderByDsc(Expression<Func<T, object>> orderbyExpression)
        {
            OrderByDsc = orderbyExpression;
        }
        protected void ApplyPaging(int skip, int take)
        {
            Skip = skip;
            Take = take;
            IsPagingEnabled = true;
        }
    }
}
