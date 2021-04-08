namespace PetStore.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    using Microsoft.AspNetCore.Http;

    public class AddProductModel
    {
        [Required]
        [MinLength(3)]
        [MaxLength(70)]
        public string Name { get; set; }

        [Required]
        [Range(0.01, double.MaxValue)]
        public double Price { get; set; }

        [Required]
        [Range(0, int.MaxValue)]
        public int Capacity { get; set; }

        [Required]
        public string PetId { get; set; }

        [Required]
        public string ProductTypeId { get; set; }

        public IFormFile Image { get; set; }
    }
}
