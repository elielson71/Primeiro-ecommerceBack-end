import { Request, Response } from "express";
import { ListProductservice } from "../../services/Product/ListProductService";

class ListProductController {
    async hanle(request: Request, response: Response){
        const listProductservice = new ListProductservice();

        const allProducts = await listProductservice.execute();

        return response.json(allProducts)
    }
}

export { ListProductController }