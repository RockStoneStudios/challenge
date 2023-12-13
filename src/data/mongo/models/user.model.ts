import {Schema,Types,model} from 'mongoose';


const UserSchema = new Schema({
    name : {type : String, required: [true, 'Name is required']},
    email : {type : String, required : [true,'Email is required']},
    password : {type : String, required : [true, 'Password is required']},
    offers : [{type : Types.ObjectId, ref : 'Product'}]
    
});


export const  UserModel = model('User', UserSchema);