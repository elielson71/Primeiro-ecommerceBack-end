import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../../repository/ProductRepository";

interface IProduct {
    id_product: string,
    name_product: string,
    category: string,
    image: string,
    selected: boolean,
    price: Number,
    created_at: Date,
}

class CreateProductservice {
    async execute(product: IProduct) {
        const productRepository = getCustomRepository(ProductRepository);
        console.log(product)
        if (!product.name_product) {
            throw new Error("Por favor informe um nome do Produto!")
        }
        const newProduct = productRepository.create(product)

        await productRepository.save(newProduct);

        return newProduct;
    }
}

export { CreateProductservice }