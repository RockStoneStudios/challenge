import { ProductDataSource, ProductEntity, ProductRepository,RegisterProductDto } from "../../domain";


export class ProductRepositoryImpl implements ProductRepository {
    constructor(
        private readonly productDatasource : ProductDataSource
    ){}
    getProducts(): Promise<ProductEntity[]> {
        return this.productDatasource.getProducts();
    }
    register( registerProductDto : RegisterProductDto): Promise<ProductEntity> {
        return this.productDatasource.register(registerProductDto);
    }

}