import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repository/CategoryRepository";

class ListCategoryservice{
    async execute(){
        const categoryRepository = getCustomRepository(CategoryRepository);

        const allCategorys = await categoryRepository.find();

        return allCategorys
    }
}

export { ListCategoryservice }
