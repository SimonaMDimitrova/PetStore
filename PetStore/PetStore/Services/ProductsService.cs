namespace PetStore.Services
{
    using System;
    using System.IO;
    using System.Linq;
    using System.Threading.Tasks;

    using PetStore.Data;
    using PetStore.Data.Models;
    using PetStore.Models;

    public class ProductsService : IProductsService
    {
        private readonly ApplicationDbContext dbContext;

        public ProductsService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Product> CreateAsync(AddProductModel input, string imagePath)
        {
            var product = new Product
            {
                Name = input.Name,
                Price = input.Price,
                Capacity = input.Capacity,
                PetId = input.PetId,
                ProductTypeId = input.ProductTypeId,
                IsDeleted = false,
                CreatedOn = DateTime.UtcNow,
            };

            Directory.CreateDirectory(imagePath);
            if (input.Image != null)
            {
                var image = input.Image;
                var extension = Path.GetExtension(image.FileName).TrimStart('.');

                var productImage = new ProductImage
                {
                    Extention = extension,
                    Product = product,
                    CreatedOn = DateTime.UtcNow,
                };

                var physicalPath = $"{imagePath}{productImage.Id}.{extension}";
                using Stream fileStream = new FileStream(physicalPath, FileMode.Create);
                await image.CopyToAsync(fileStream);
            }

            await this.dbContext.AddAsync(product);
            await this.dbContext.SaveChangesAsync();

            return product;
        }

        public async Task DeleteAsync(string id)
        {
            var product = this.dbContext
                .Products
                .FirstOrDefault(p => p.Id == id);

            // TODO: Throw exeption if it's null
            this.dbContext.Remove(product);
            await this.dbContext.SaveChangesAsync();
        }

        public async Task EditAsync(EditProductModel input)
        {
            var product = this.dbContext
                .Products
                .Where(p => p.Id == input.ProductId)
                .FirstOrDefault();

            product.Name = input.Name;
            product.Price = input.Price;
            product.Capacity = input.Capacity;
            product.ModifiedOn = DateTime.UtcNow;

            await this.dbContext.SaveChangesAsync();
        }

        public EditProductModel GetById(string id)
        {
            return this.dbContext
                .Products
                .Where(p => p.Id == id)
                .Select(p => new EditProductModel
                {
                    ProductId = p.Id,
                    Name = p.Name,
                    Price = p.Price,
                    Capacity = p.Capacity,
                })
                .FirstOrDefault();
        }
    }
}
