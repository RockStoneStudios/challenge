import { ProductEntity, RegisterProductDto } from "../index";







export abstract class ProductDataSource {

    abstract register(registerProductDto : RegisterProductDto) : Promise<ProductEntity>;
    abstract getProducts () : Promise<ProductEntity[]>
}