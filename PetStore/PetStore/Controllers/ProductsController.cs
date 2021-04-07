namespace PetStore.Controllers
{
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;
    using PetStore.Data.Models;
    using PetStore.Models;
    using PetStore.Services;

    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService productsService;

        public ProductsController(
            IProductsService productsService)
        {
            this.productsService = productsService;
        }

        [HttpPost]
        public async Task<ActionResult<Product>> Post([FromForm] AddProductModel input)
        {
            var model = await this.productsService.CreateAsync(input, "../ClientApp/public/images/products/");
            return this.Ok(model);
        }
    }
}
