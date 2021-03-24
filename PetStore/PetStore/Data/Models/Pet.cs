namespace PetStore.Data.Models
{
    using System;
    using System.Collections.Generic;

    public class Pet : BaseModel
    {
        public Pet()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Name { get; set; }
    }
}
