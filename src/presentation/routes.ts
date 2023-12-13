import { Router } from "express";
import { UserRoutes } from "./users/routes";
import { ProductRoutes } from "./products/routes";



export class AppRoutes {
    constructor() {}

    static get routes() : Router {
     const router = Router();
      router.use('/api/users',UserRoutes.routes);
      router.use('/api/products',ProductRoutes.routes);

         return router;
    }
}