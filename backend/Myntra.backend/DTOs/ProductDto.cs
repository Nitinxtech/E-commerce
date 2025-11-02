using Myntra.Backend.Models;

namespace Myntra.Backend.DTOs
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public string? Brand { get; set; }
        public double Rating { get; set; }
        public int RatingCount { get; set; }
        public string? ImageUrl { get; set; }
        public Category Category { get; set; }
        public int Stock { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}