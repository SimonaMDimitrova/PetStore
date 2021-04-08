namespace PetStore.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using PetStore.Data.Models;
    using PetStore.Models;

    public interface IProductsService
    {
        public Task<Product> CreateAsync(AddProductModel input, string imagePath);

        public ProductsListModel GetAll();

        public EditProductModel GetById(string id);

        public Task EditAsync(EditProductModel input);

        public Task DeleteAsync(string id);

        public ProductNameModel GetName(string id);
    }
}
