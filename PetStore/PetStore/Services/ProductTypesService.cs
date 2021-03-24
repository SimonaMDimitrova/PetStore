namespace PetStore.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using PetStore.Data;
    using PetStore.Data.Models;

    public class ProductTypesService : IProductTypesService
    {
        private readonly ApplicationDbContext dbContext;

        public ProductTypesService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task AddAsync(string name)
        {
            var productType = new ProductType
            {
                Name = name,
                CreatedOn = DateTime.UtcNow,
                IsDeleted = false,
            };

            await this.dbContext.ProductTypes.AddAsync(productType);
            await this.dbContext.SaveChangesAsync();
        }

        public IEnumerable<KeyValuePair<string, string>> GetByKeyValuePairs()
        {
            return this.dbContext
                .ProductTypes
                .Select(p => new
                {
                    Id = p.Id,
                    Name = p.Name,
                })
                .OrderBy(p => p.Name)
                .ToList().Select(p => new KeyValuePair<string, string>(p.Id, p.Name));
        }
    }
}
