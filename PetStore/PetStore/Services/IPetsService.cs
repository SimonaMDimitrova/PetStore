namespace PetStore.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IPetsService
    {
        public IEnumerable<KeyValuePair<string, string>> GetByKeyValuePairs();
    }
}
