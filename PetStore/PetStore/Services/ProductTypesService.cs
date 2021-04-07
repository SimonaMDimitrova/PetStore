namespace PetStore.Services
{
    using System.Collections.Generic;
    using System.Linq;

    using PetStore.Data;

    public class ProductTypesService : IProductTypesService
    {
        private readonly ApplicationDbContext dbContext;

        public ProductTypesService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
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
