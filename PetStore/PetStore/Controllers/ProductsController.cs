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

        [HttpGet]
        public ActionResult<ProductsListModel> GetAll()
        {
            var model = this.productsService.GetAll();
            return model;
        }

        [HttpGet("GetOne")]
        public ActionResult<SingleProductModel> GetOne(string id)
        {
            var model = this.productsService.GetById(id);
            if (model == null)
            {
                return this.BadRequest();
            }

            return model;
        }

        [HttpGet("Search")]
        public ActionResult<ProductsListModel> GetBySearchedParameters(string name)
        {
            var model = this.productsService.GetBySearchedParameters(name);
            return model;
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

        [HttpGet("Edit")]
        public ActionResult<EditProductModel> GetEditModel(string id)
        {
            var model = this.productsService.GetByIdEditModel(id);
            if (model == null)
            {
                return this.BadRequest();
            }

            return model;
        }

        [HttpPut]
        public async Task<ActionResult<Product>> PostEditModel([FromForm] EditProductModel input)
        {
            if (input.Name.Length < 3 || input.Name.Length > 70)
            {
                return this.BadRequest();
            }

            var model = await this.productsService.EditAsync(input);

            return model;
        }

        [HttpPost]
        public async Task<ActionResult<Product>> Post([FromForm] AddProductModel input)
        {
            if (input.Name.Length < 3 || input.Name.Length > 70)
            {
                return this.BadRequest();
            }

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
