export interface Wish {
    count:number
    data:data[]
}


interface data{
    imageCover:string,
    price:number,
    title:string
    id:string
}