import { Request, Response } from "express";
import { ListCategoryservice } from "../../services/Category/ListCategoryService";

class ListCategoryController {
    async hanle(request: Request, response: Response){
        const listCategoryservice = new ListCategoryservice();

        const allCategorys = await listCategoryservice.execute();

        return response.json(allCategorys)
    }
}

export { ListCategoryController }