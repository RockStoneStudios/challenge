import { RegisterUserDto, UserEntity, UserRepository, UserDatasource } from '../../domain';





export class UserRepositoryImpl implements UserRepository {
    constructor(
        private readonly userDatasource : UserDatasource
    ){}
    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.userDatasource.register(registerUserDto);
    }

}


