import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repository/CategoryRepository";

interface ICategory {
    id_category: string,
    category: string,
    created_at: Date,
}

class CreateCategoryservice {
    async execute(category: ICategory) {
        const categoryRepository = getCustomRepository(CategoryRepository);

        const newCategory = categoryRepository.create(category)

        await categoryRepository.save(newCategory);

        return newCategory;
    }
}

export { CreateCategoryservice }