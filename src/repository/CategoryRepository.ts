import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entities/category";

@EntityRepository(Category)
class CategoryRepository extends Repository<Category> {}

export { CategoryRepository }