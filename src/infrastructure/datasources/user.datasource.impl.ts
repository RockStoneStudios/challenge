import { BcryptAdapter } from "../../config/bcrypt";
import {UserModel} from "../../data";
import { CustomError, RegisterUserDto, UserDatasource, UserEntity } from "../../domain";


export class UserDataSourceImpl extends UserDatasource {
   userOffers(registerUserDto: RegisterUserDto): Promise<UserEntity> {
      throw new Error("Method not implemented.");
   }

 
   async  register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const {name,email,password,offers} = registerUserDto;
         try{
            const exists = await UserModel.findOne({email});
            if(exists) throw CustomError.badRequest('User already exist');

            const user = await UserModel.create({
               name,
               email,
               password : BcryptAdapter.hash(password),
               offers
            });
            await user.save();
            return new UserEntity(
                 user.id,
                 name,
                 email,
                 user.password as string,
                 offers
            )

         }catch(error){
            if(error instanceof CustomError){
                throw error;
            }

            throw CustomError.internalServer();
         }
    }

}