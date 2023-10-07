export interface Cart {
    numOfCartItems:number,
    data:data
}

interface data{
    totalCartPrice:number,
    products:product[]
}

interface product{
    count:number,
    price:number,
    product: innerproduct
}


interface innerproduct{
    title:string,
    imageCover:string,
    category: category,
    id:string
}

interface category{
    name:string
}
