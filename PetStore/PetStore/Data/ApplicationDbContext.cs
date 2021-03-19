namespace PetStore.Data
{
    using IdentityServer4.EntityFramework.Options;
    using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Options;
    using PetStore.Data.Models;
    using PetStore.Models;

    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Pet> Pets { get; set; }

        public DbSet<Breed> Breeds { get; set; }

        public DbSet<ProductType> ProductTypes { get; set; }

        public DbSet<Product> Products { get; set; }
    }
}
