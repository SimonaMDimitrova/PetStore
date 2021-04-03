namespace PetStore.Data.Seeding
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;

    using PetStore.Data.Models;

    internal class ProductTypesSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            if (dbContext.ProductTypes.Any())
            {
                return;
            }

            await dbContext.ProductTypes.AddAsync(new ProductType { Name = "Food", CreatedOn = DateTime.UtcNow });
            await dbContext.ProductTypes.AddAsync(new ProductType { Name = "Accessories", CreatedOn = DateTime.UtcNow });
            await dbContext.ProductTypes.AddAsync(new ProductType { Name = "Cosmetics and care", CreatedOn = DateTime.UtcNow });
        }
    }
}
