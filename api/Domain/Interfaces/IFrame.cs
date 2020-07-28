using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Domain.Interfaces
{
    public interface IFrame<T>
    {
        Expression<Func<T, bool>> Criteria { get; }
        // Expression<Func<T, object>> OrderBy { get; }
        // Expression<Func<T, object>> OrderByDescending { get; }
        List<Expression<Func<T, object>>> Includes { get; }
        // int Take { get; }
        // int Skip { get; }
        // int IsPagingEnabled { get; }
    }
}
