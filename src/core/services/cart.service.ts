import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  number:BehaviorSubject<number> = new BehaviorSubject(0)

  constructor(private _http:HttpClient) { 

    this.getcart().subscribe({
      next:(res)=>{
        this.number.next(res.numOfCartItems)
      }
    })
  }


  addtocart(id:string):Observable<any>{
    return this._http.post("https://ecommerce.routemisr.com/api/v1/cart",{
      productId:id
    },{
      headers:{
        token : `${localStorage.getItem("userT")}`
      }
    })
  }


  getcart():Observable<any>{
    return this._http.get("https://ecommerce.routemisr.com/api/v1/cart",{
      headers:{
        token : `${localStorage.getItem("userT")}`
      }
    })
  }


  updatecart(count:number,id:string):Observable<any>{
    return this._http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      count:`${count}`
    },{
      headers:{
        token : `${localStorage.getItem("userT")}`
      }
    })
  }

  deletcart(id:string):Observable<any>{
    return this._http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      headers:{
        token : `${localStorage.getItem("userT")}`
      }
    })
  }

  clearcart():Observable<any>{
    return this._http.delete("https://ecommerce.routemisr.com/api/v1/cart/",{
      headers:{
        token : `${localStorage.getItem("userT")}`
      }
    })
    
  }


  payment(cartID:string,shippingAddress:any):Observable<any>{
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}?url=http://localhost:4200`,{
      shippingAddress:shippingAddress
    },{
      headers:{
        token : `${localStorage.getItem("userT")}`
      }
    })
  }

  
}
