namespace PetStore.Models
{
    using System.Collections.Generic;

    public class ProductsListModel
    {
        public IEnumerable<ProductInListModel> Products { get; set; }
    }
}
