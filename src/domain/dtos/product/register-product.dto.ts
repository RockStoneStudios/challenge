export class RegisterProductDto {
    constructor(
        public name : string,
        public brand : string,
        public price_base : number,
        public stock : number
    ){}

    static create(object:{[key:string] : any}): [string?, RegisterProductDto?] {
          
         const {name,brand,price_base,stock} = object;
         if(!name) return ['Missing name',undefined];
         if(!brand) return ['Missing brand',undefined];
        
         if(price_base <1 ) return [ 'Price no valid',undefined];
         if(stock < 0) return ['stock no valid'];

         return [
             undefined,
             new RegisterProductDto(name,brand.toLowerCase(),price_base,stock)
         ];
    }
}