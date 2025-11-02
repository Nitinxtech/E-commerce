using System;
using System.ComponentModel.DataAnnotations;

namespace Myntra.Backend.Models {
    public class Product {
        public int Id { get; set; }

        [Required, MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(2000)]
        public string? Description { get; set; }

        [Required]
        public decimal Price { get; set; }

        public string? Brand { get; set; }

        // store rating as 0.0 - 5.0
        public double Rating { get; set; } = 0.0;

        public int RatingCount { get; set; } = 0;

        // image url, can be remote or stored path
        public string? ImageUrl { get; set; }

        public Category Category { get; set; } = Category.Men;

        public int Stock { get; set; } = 0;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}