namespace PetStore.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class ProductImage : BaseModel
    {
        public ProductImage()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Extention { get; set; }

        public string ProductId { get; set; }

        public Product Product { get; set; }
    }
}
