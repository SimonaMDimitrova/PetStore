namespace PetStore.Data.Models
{
    using System;

    using PetStore.Data.Common;

    public class BaseModel : IAuditInfo, IDeletableEntity
    {
        public string Id { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }
    }
}
