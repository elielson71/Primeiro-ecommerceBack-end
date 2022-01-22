import { Request, Response } from "express";
import { DeleteProductService } from "../../services/Product/DeleteProductService";

class DeleteProductController{
    async handle(request: Request, response: Response){
        const { id_product } = request.body;

        const deleteProductService = new DeleteProductService();
        const newProduct = await deleteProductService.execute({id_product});

        return response.json(newProduct);
    }
}

export { DeleteProductController }