using Endpoint.Helpers.Error;
using Microsoft.AspNetCore.Mvc;

namespace Endpoint.Controllers
{
    [Route("error/{code}")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ErrorController : ApiController
    {
        public IActionResult Error(int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}