namespace PetStore.Data.Models
{
    using System;

    public class BaseModel
    {
        public string Id { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime ModifiedOn { get; set; }

        public DateTime DeletedOn { get; set; }
    }
}
