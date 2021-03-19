namespace PetStore.Data.Models
{
    using System;
    using System.Collections.Generic;

    public class Pet : BaseModel
    {
        public Pet()
        {
            this.Id = Guid.NewGuid().ToString();

            this.Breeds = new HashSet<Breed>();
        }

        public string Name { get; set; }

        public ICollection<Breed> Breeds { get; set; }
    }
}
