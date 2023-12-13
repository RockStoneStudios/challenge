import { Validators } from "../../../utils/validatorEmail";



export class RegisterUserDto {
    constructor(
        public name : string,
        public email : string,
        public password : string,
        public offers? : string[]
    ){}

    static create(object:{[key:string] : any}): [string?, RegisterUserDto?] {
          
         const {name,email,password,offers} = object;
         if(!name) return ['Missing name',undefined];
         if(!email) return ['Missing email',undefined];
         if(!Validators.email.test(email)) return ['Email is not valid!',undefined];
         if(!password) return [ 'Missing password',undefined];
         if(password.lenght <6) return ['Password too short'];

         return [
             undefined,
             new RegisterUserDto(name,email.toLowerCase(),password,offers)
         ];
    }
}