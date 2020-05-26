using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        // validate here as users do not control id or password hash and salt

        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Password must contain between 4 and 8 characters")]
        public string Password { get; set; }
    }
}