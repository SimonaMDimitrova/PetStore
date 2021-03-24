namespace PetStore.Data.Models
{
    using System;
    using System.Collections.Generic;

    public class Order : BaseModel
    {
        public Order()
        {
            this.Id = Guid.NewGuid().ToString();

            this.ProductOrders = new HashSet<ProductOrder>();
        }

        public string ApplicationUserId { get; set; }

        public ApplicationUser ApplicationUser { get; set; }

        public ICollection<ProductOrder> ProductOrders { get; set; }
    }
}
