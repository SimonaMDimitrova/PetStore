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
                Description = input.Description,
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
                    CreatedOn = DateTime.UtcNow,
                };

                var physicalPath = $"{imagePath}{productImage.Id}.{extension}";
                using Stream fileStream = new FileStream(physicalPath, FileMode.Create);
                await image.CopyToAsync(fileStream);

                product.ProductImage = productImage;
            }

            await this.dbContext.AddAsync(product);
            await this.dbContext.SaveChangesAsync();

            return product;
        }

        public async Task DeleteAsync(string id)
        {
            var product = this.dbContext
                .Products
                .FirstOrDefault(p => p.Id == id && p.IsDeleted == false);
            if (product == null)
            {
                throw new NullReferenceException("There is no product found.");
            }

            var productImage = this.dbContext
                .Products
                .Select(p => p.ProductImage)
                .FirstOrDefault();
            if (productImage != null)
            {
                productImage.DeletedOn = DateTime.UtcNow;
                productImage.IsDeleted = true;
            }

            product.DeletedOn = DateTime.UtcNow;
            product.IsDeleted = true;

            await this.dbContext.SaveChangesAsync();
        }

        public async Task<Product> EditAsync(EditProductModel input)
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

            return product;
        }

        public ProductsListModel GetAll()
        {
            var products = this.dbContext
                .Products
                .Where(p => p.Capacity > 0 && p.IsDeleted == false)
                .OrderByDescending(p => p.CreatedOn)
                .Select(p => new ProductInListModel
                {
                    Id = p.Id,
                    Name = p.Name,
                    Price = p.Price,
                    ImagePath = p.ProductImage != null
                        ? $"/images/products/{p.ProductImageId}.{p.ProductImage.Extention}"
                        : "/images/defaults/placeholder.png",
                })
                .ToList();

            var productsList = new ProductsListModel
            {
                Products = products,
            };

            return productsList;
        }

        public SingleProductModel GetById(string id)
        {
            return this.dbContext
                .Products
                .Where(p => p.Id == id)
                .Select(p => new SingleProductModel
                {
                    Id = p.Id,
                    Description = p.Description,
                    ImagePath = p.ProductImage != null
                        ? $"/images/products/{p.ProductImageId}.{p.ProductImage.Extention}"
                        : "/images/defaults/placeholder.png",
                    Name = p.Name,
                    Price = p.Price,
                })
                .FirstOrDefault();
        }

        public EditProductModel GetByIdEditModel(string id)
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

        public ProductNameModel GetName(string id)
        {
            return this.dbContext
                .Products
                .Where(p => p.Id == id && p.IsDeleted == false)
                .Select(p => new ProductNameModel
                {
                    Name = p.Name,
                    Id = p.Id,
                })
                .FirstOrDefault();
        }
    }
}
