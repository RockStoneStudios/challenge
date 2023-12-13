import { RegisterUserDto } from '../dtos/user/register-user.dto';
import { UserEntity } from "../entities/user.entity";



export abstract class UserDatasource { 

    abstract register(registerUserDto : RegisterUserDto): Promise<UserEntity>;

    abstract userOffers (registerUserDto:RegisterUserDto): Promise<UserEntity>;


}