namespace PetStore.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IProductTypesService
    {
        public Task AddAsync(string name);

        public IEnumerable<KeyValuePair<string, string>> GetByKeyValuePairs();
    }
}
