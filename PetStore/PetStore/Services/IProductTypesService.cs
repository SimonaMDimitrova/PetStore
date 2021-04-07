namespace PetStore.Services
{
    using System.Collections.Generic;

    public interface IProductTypesService
    {
        public IEnumerable<KeyValuePair<string, string>> GetByKeyValuePairs();
    }
}
