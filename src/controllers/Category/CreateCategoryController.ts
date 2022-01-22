import { Request, Response } from "express";
import { CreateCategoryservice } from "../../services/Category/CreateCategoryService";

class CreateCategoryController{
    async handle(request: Request, response: Response){
        const category  = request.body;
        
    
        const createCategoryService = new CreateCategoryservice();

        const newCategory = await createCategoryService.execute(category);

        return response.json(newCategory);

    }
}

export { CreateCategoryController }