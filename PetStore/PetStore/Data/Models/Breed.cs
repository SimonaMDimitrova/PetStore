namespace PetStore.Data.Models
{
    using System;

    public class Breed : BaseModel
    {
        public Breed()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Name { get; set; }

        public string PetId { get; set; }

        public Pet Pet { get; set; }
    }
}
