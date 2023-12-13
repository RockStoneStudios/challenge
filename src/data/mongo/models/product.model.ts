import {model,Schema} from 'mongoose';



const ProductSchema = new Schema ({
    name : {type: String, required: [true, 'Name is required']},
    brand : {type : String, required : [true, 'Brand is required']},
    price_base : {type : Number, required : [true, 'Price base is required']},
    stock : {type : Number, required: [true, 'Stock is required']}
});


export const ProductModel = model('Product',ProductSchema);