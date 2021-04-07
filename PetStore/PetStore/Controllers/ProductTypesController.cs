namespace PetStore.Controllers
{
    using System.Collections.Generic;
    using System.Linq;

    using Microsoft.AspNetCore.Mvc;
    using PetStore.Services;

    [Route("api/[controller]")]
    [ApiController]
    public class ProductTypesController : ControllerBase
    {
        private readonly IProductTypesService productTypesService;

        public ProductTypesController(IProductTypesService productTypesService)
        {
            this.productTypesService = productTypesService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<KeyValuePair<string, string>>> Get()
        {
            return this.productTypesService.GetByKeyValuePairs().ToList();
        }
    }
}
