import {Request,Response} from 'express';
import { RegisterUserDto } from '../../domain';
import { UserRepository } from '../../domain';



export class UserController {
    constructor(
        private readonly userRepository : UserRepository
    ){
       
    }

    registerUser = async (req:Request,res: Response) => {
       const [error,registerUserDto] = RegisterUserDto.create(req.body);
       if(error) return res.status(400).json({error});
       
       this.userRepository.register(registerUserDto!).then(user => res.json(user))
                                                     .catch(error => res.status(500).json(error));
    }

}