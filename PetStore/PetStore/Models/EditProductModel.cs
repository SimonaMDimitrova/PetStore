namespace PetStore.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class EditProductModel
    {
        public string ProductId { get; set; }

        [MinLength(3)]
        [MaxLength(70)]
        public string Name { get; set; }

        [Range(0.01, double.MaxValue)]
        public double Price { get; set; }

        [Range(0, int.MaxValue)]
        public int Capacity { get; set; }
    }
}
