import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repository/CategoryRepository";

interface ICategory {
    id_category: string;
}

class DeleteCategoryService {
    async execute({ id_category}: ICategory){
        const categoryRepository = getCustomRepository(CategoryRepository);
        console.log(id_category)
        if(!id_category){
            throw new Error("Por favor informe um id!")
        }

        const newCategory = categoryRepository.delete(id_category)

        await categoryRepository.delete(id_category);

        return newCategory;
    }
}

export  { DeleteCategoryService }