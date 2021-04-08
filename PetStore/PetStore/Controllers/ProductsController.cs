namespace PetStore.Controllers
{
    using System;
    using System.Threading.Tasks;

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

        [HttpGet("Name")]
        public ActionResult<ProductNameModel> GetName(string id)
        {
            var model = this.productsService.GetName(id);
            if (model == null)
            {
                return this.BadRequest();
            }

            return model;
        }

        [HttpGet]
        public ActionResult<ProductsListModel> Get()
        {
            var model = this.productsService.GetAll();
            return model;
        }

        [HttpPost]
        public async Task<ActionResult<Product>> Post([FromForm] AddProductModel input)
        {
            var model = await this.productsService.CreateAsync(input, "./ClientApp/public/images/products/");
            return this.Ok(model);
        }

        [HttpDelete]
        public async Task<ActionResult> Delete([FromForm] string id)
        {
            try
            {
                await this.productsService.DeleteAsync(id);
            }
            catch (NullReferenceException ex)
            {
                this.ModelState.AddModelError(nameof(id), ex.Message);
                return this.BadRequest(this.ModelState);
            }

            return this.NoContent();
        }
    }
}
