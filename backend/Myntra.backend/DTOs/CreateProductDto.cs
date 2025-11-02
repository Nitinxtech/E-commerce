using System.ComponentModel.DataAnnotations;
using Myntra.Backend.Models;

namespace Myntra.Backend.DTOs
{
    public class CreateProductDto
    {
        [Required, MaxLength(200)]
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        [Required]
        public decimal Price { get; set; }
        public string? Brand { get; set; }
        public string? ImageUrl { get; set; }
        public Category Category { get; set; } = Category.Men;
        public int Stock { get; set; } = 0;
    }
}