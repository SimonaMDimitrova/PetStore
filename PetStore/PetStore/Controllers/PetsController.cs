namespace PetStore.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;
    using PetStore.Models;
    using PetStore.Services;

    [Route("api/[controller]")]
    [ApiController]
    public class PetsController : ControllerBase
    {
        private readonly IPetsService petsService;

        public PetsController(IPetsService petsService)
        {
            this.petsService = petsService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<KeyValuePair<string, string>>> Get()
        {
            return this.petsService.GetByKeyValuePairs().ToList();
        }
    }
}
