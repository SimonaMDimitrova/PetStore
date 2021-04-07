namespace PetStore.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using PetStore.Data;
    using PetStore.Data.Models;

    public class PetsService : IPetsService
    {
        private readonly ApplicationDbContext dbContext;

        public PetsService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public IEnumerable<KeyValuePair<string, string>> GetByKeyValuePairs()
        {
            return this.dbContext
                .Pets
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
