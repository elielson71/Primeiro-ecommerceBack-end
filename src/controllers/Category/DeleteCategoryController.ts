import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/Category/DeleteCategoryService";

class DeleteCategoryController{
    async handle(request: Request, response: Response){
        const { id_category } = request.body;

        const deleteCategoryService = new DeleteCategoryService();
        const newCategory = await deleteCategoryService.execute({id_category});

        return response.json(newCategory);
    }
}

export { DeleteCategoryController }