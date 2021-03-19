namespace PetStore.Data.Models
{
    using System;
    using System.Collections.Generic;

    public class ProductType : BaseModel
    {
        public ProductType()
        {
            this.Id = Guid.NewGuid().ToString();

            this.Products = new HashSet<Product>();
        }

        public string Name { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
