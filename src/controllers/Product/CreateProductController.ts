import { Request, Response } from "express";
import { CreateProductservice } from "../../services/Product/CreateProductService";

class CreateProductController{
    async handle(request:any, response: Response,){
        const product  = request.body;
        console.log(product)
        const createProductService = new CreateProductservice();

        const newProduct = await createProductService.execute(product);

        return response.json(newProduct);
    }
}

export { CreateProductController }