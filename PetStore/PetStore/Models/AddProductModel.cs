namespace PetStore.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    using Microsoft.AspNetCore.Http;

    public class AddProductModel : BaseProductInputModel
    {
        [Required]
        public string PetId { get; set; }

        [Required]
        public string ProductTypeId { get; set; }

        public IFormFile Image { get; set; }

        public string Description { get; set; }
    }
}
