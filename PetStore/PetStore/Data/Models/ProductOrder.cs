namespace PetStore.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class ProductOrder : BaseModel
    {
        public ProductOrder()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string ProductId { get; set; }

        public Product Product { get; set; }

        public string OrderId { get; set; }

        public Order Order { get; set; }
    }
}
