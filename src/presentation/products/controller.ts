import { Request, Response } from "express";
import { RegisterProductDto } from "../../domain";
import { ProductRepository } from '../../domain/repositories/product.repository';





export class ProductController {

     constructor(
        private readonly productRepository :  ProductRepository
     ){}

     registerProduct = async (req:Request,res: Response) => {
        const [error,registerProductDto] = RegisterProductDto.create(req.body);
        this.productRepository.register(registerProductDto!).then(product => res.json(product))
                                                            .catch(error => res.status(500).json(error))
       
     }

     getProducts = async (req:Request, res : Response) => {
       this.productRepository.getProducts().then(products => res.json(products))
                                           .catch(error => res.status(500).json(error));
     }

}