using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Myntra.Backend.Data;
using Myntra.Backend.DTOs;
using Myntra.Backend.Models;

namespace Myntra.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public ProductsController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: api/products
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] Category? category = null)
        {
            var query = _db.Products.AsQueryable();
            if (category.HasValue) query = query.Where(p => p.Category == category.Value);
            var list = await query.OrderByDescending(p => p.CreatedAt).ToListAsync();
            return Ok(list);
        }

        // GET: api/products/5
        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            var p = await _db.Products.FindAsync(id);
            if (p == null) return NotFound();
            return Ok(p);
        }

        // POST: api/products
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateProductDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var product = new Product
            {
                Title = dto.Title,
                Description = dto.Description,
                Price = dto.Price,
                Brand = dto.Brand,
                ImageUrl = dto.ImageUrl,
                Category = dto.Category,
                Stock = dto.Stock,
                CreatedAt = DateTime.UtcNow
            };

            _db.Products.Add(product);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = product.Id }, product);
        }

        // PUT: api/products/5
        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateProductDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var product = await _db.Products.FindAsync(id);
            if (product == null) return NotFound();

            product.Title = dto.Title;
            product.Description = dto.Description;
            product.Price = dto.Price;
            product.Brand = dto.Brand;
            product.ImageUrl = dto.ImageUrl;
            product.Category = dto.Category;
            product.Stock = dto.Stock;
            product.Rating = dto.Rating;
            product.RatingCount = dto.RatingCount;

            await _db.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/products/5
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var product = await _db.Products.FindAsync(id);
            if (product == null) return NotFound();
            _db.Products.Remove(product);
            await _db.SaveChangesAsync();
            return NoContent();
        }

        // PATCH: api/products/5/rate
        [HttpPatch("{id:int}/rate")]
        public async Task<IActionResult> Rate(int id, [FromQuery] double rating)
        {
            if (rating < 0 || rating > 5) return BadRequest("rating must be between 0 and 5");
            var p = await _db.Products.FindAsync(id);
            if (p == null) return NotFound();

            // update average rating simple approach
            var totalScore = p.Rating * p.RatingCount;
            p.RatingCount += 1;
            p.Rating = (totalScore + rating) / p.RatingCount;

            await _db.SaveChangesAsync();
            return Ok(p);
        }
    }
}