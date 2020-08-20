using Model.Identity;

namespace Domain.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}