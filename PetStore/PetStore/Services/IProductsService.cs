namespace PetStore.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using PetStore.Data.Models;
    using PetStore.Models;

    public interface IProductsService
    {
        public SingleProductModel GetById(string id);

        public Task<Product> CreateAsync(AddProductModel input, string imagePath);

        public ProductsListModel GetAll();

        public EditProductModel GetByIdEditModel(string id);

        public Task<Product> EditAsync(EditProductModel input);

        public Task DeleteAsync(string id);

        public ProductNameModel GetName(string id);
    }
}
