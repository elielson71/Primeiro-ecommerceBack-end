import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../../repository/ProductRepository";

class ListProductservice{
    async execute(){
        const productRepository = getCustomRepository(ProductRepository);

        const allProducts = await productRepository.find();

        return allProducts
    }
}

export { ListProductservice }
