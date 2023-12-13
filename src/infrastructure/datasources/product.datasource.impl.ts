import { ProductModel } from "../../data";
import { CustomError, ProductDataSource, ProductEntity, RegisterProductDto } from "../../domain";




export class ProductDataSourceImpl extends ProductDataSource {
  async  getProducts(): Promise<ProductEntity[]> {
       try{
         const products = await ProductModel.find({stock : {$gt : 0 }});
         return products.map(product => new ProductEntity(product.name,product.brand,product.price_base,product.stock))
    }catch(error){
           if(error instanceof CustomError){
               throw error;
           }
   
           throw CustomError.internalServer();

       }
   }

   async  register(registerProductDto: RegisterProductDto): Promise<ProductEntity> {
        const {name,brand,price_base,stock} = registerProductDto;
        try{


             const product = await ProductModel.create({
                name,
                brand,
                price_base,
                stock
             });
             await product.save();

            return new ProductEntity(
                
                name,
                brand,
                price_base,
                5
           )
        }catch(error){
            if(error instanceof CustomError){
                throw error;
            }

            throw CustomError.internalServer();
        }
    }

    

}