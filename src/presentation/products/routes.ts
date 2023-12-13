import { Router } from "express";
import { ProductController } from "./controller";
import { ProductDataSourceImpl } from "../../infrastructure/datasources/product.datasource.impl";
import { ProductRepositoryImpl } from '../../infrastructure/repositories/product.repository.impl';



export class ProductRoutes {

    static get routes () : Router {
         const router = Router();
         const datasource = new ProductDataSourceImpl();
         const productRepository = new ProductRepositoryImpl(datasource);
         const controller = new ProductController(productRepository);

         router.post('/register',controller.registerProduct);
         router.get('/',controller.getProducts);

         return router;
    }
}