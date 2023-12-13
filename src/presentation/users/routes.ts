import { Router, Request, Response } from "express";
import { UserController } from "./controller";
import { UserDataSourceImpl, UserRepositoryImpl } from "../../infrastructure";




export class UserRoutes {

     static get routes(): Router {
        const router = Router();
        const databasource = new UserDataSourceImpl();
        const userRepository = new UserRepositoryImpl(databasource);
        const controller = new UserController(userRepository);
        router.post('/register',controller.registerUser);
        
        return router;
     }
}