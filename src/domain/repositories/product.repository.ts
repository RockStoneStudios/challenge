import { ProductEntity, RegisterProductDto } from "..";


export abstract class ProductRepository{
    abstract register( registerProductDto : RegisterProductDto) : Promise<ProductEntity>;
    abstract getProducts () : Promise<ProductEntity[]>
}