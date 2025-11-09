using Microsoft.EntityFrameworkCore;
using Myntra.Backend.Models;


namespace Myntra.Backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Product> Products { get; set; } = null!;
        public DbSet<User> Users { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Title = "Men's Casual Shirt",
                    Description = "Slim fit casual shirt - cotton",
                    Brand = "UrbanX",
                    Price = 799.00m,
                    Rating = 4.3,
                    RatingCount = 250,
                    ImageUrl = "https://example.com/images/mens_shirt_1.jpg",
                    Category = Category.Men,
                    Stock = 50,
                    CreatedAt = new DateTime(2023, 01, 01)
                },
                new Product
                {
                    Id = 2,
                    Title = "Women's Summer Dress",
                    Description = "Floral midi dress - breathable fabric",
                    Brand = "Luna",
                    Price = 1299.00m,
                    Rating = 4.6,
                    RatingCount = 180,
                    ImageUrl = "https://example.com/images/womens_dress_1.jpg",
                    Category = Category.Women,
                    Stock = 30,
                    CreatedAt = new DateTime(2023, 01, 01)
                }
            );
        }
    }
}