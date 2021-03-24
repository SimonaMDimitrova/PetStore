namespace PetStore.Services
{
    using System.Threading.Tasks;

    using PetStore.Models;

    public interface IProductsService
    {
        public Task AddAsync(AddProductModel input);

        public EditProductModel GetById(string id);

        public Task EditAsync(EditProductModel input);

        public Task DeleteAsync(string id);
    }
}
