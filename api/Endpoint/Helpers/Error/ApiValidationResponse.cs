using System.Collections.Generic;

namespace Endpoint.Helpers.Error
{
    public class ApiValidationResponse : ApiResponse
    {
        public IEnumerable<string> Errors { get; set; }
        public ApiValidationResponse() : base(400)
        {
        }
    }
}