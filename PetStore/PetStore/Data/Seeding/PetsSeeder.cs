namespace PetStore.Data.Seeding
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;

    using PetStore.Data.Models;

    internal class PetsSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            if (dbContext.Pets.Any())
            {
                return;
            }

            await dbContext.Pets.AddAsync(new Pet { Name = "Dogs", CreatedOn = DateTime.UtcNow });
            await dbContext.Pets.AddAsync(new Pet { Name = "Cats", CreatedOn = DateTime.UtcNow });
            await dbContext.Pets.AddAsync(new Pet { Name = "Fishes", CreatedOn = DateTime.UtcNow });
            await dbContext.Pets.AddAsync(new Pet { Name = "Birds", CreatedOn = DateTime.UtcNow });
        }
    }
}
