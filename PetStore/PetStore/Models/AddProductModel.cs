namespace PetStore.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class AddProductModel
    {
        [MinLength(3)]
        [MaxLength(70)]
        public string Name { get; set; }

        [Range(1.00, double.MaxValue)]
        public double Price { get; set; }

        [Range(0, int.MaxValue)]
        public int Capacity { get; set; }

        [Required]
        public string ProductTypeId { get; set; }

        public IEnumerable<KeyValuePair<string, string>> ProductTypes { get; set; }

        [Required]
        public string PetId { get; set; }

        public IEnumerable<KeyValuePair<string, string>> Pets { get; set; }
    }
}
