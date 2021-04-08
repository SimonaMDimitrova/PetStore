namespace PetStore.Data.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class Product : BaseModel
    {
        public Product()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Name { get; set; }

        public double Price { get; set; }

        // [ConcurrencyCheck]
        public int Capacity { get; set; }

        [Required]
        public string ProductTypeId { get; set; }

        public ProductType ProductType { get; set; }

        public string PetId { get; set; }

        public Pet Pet { get; set; }

        public string ProductImageId { get; set; }

        public ProductImage ProductImage { get; set; }
    }
}
