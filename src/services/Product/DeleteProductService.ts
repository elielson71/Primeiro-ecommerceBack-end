import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../../repository/ProductRepository";

interface IProduct {
    id_product: string;
}

class DeleteProductService {
    async execute({ id_product}: IProduct){
        const productRepository = getCustomRepository(ProductRepository);
        console.log(id_product)
        if(!id_product){
            throw new Error("Por favor informe um id!")
        }

        const newProduct = productRepository.delete(id_product)

        await productRepository.delete(id_product);

        return newProduct;
    }
}

export  { DeleteProductService }