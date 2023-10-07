import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishLService {

  constructor(private _http:HttpClient) { }


  addToWish(id:string) : Observable<any>{
  return this._http.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
    productId:id
  },{
    headers:{
      token : `${localStorage.getItem('userT')}`
    }
  }
  )
  }

  removeFromWish(id:string):Observable<any>{
    return this._http.delete('https://ecommerce.routemisr.com/api/v1/wishlist/'+ `${id}`,{
      headers:{
        token: `${localStorage.getItem("userT")}`
      }
    })
  }


  getFromWish():Observable<any>{
    return this._http.get('https://ecommerce.routemisr.com/api/v1/wishlist',{
      headers:{
        token :`${localStorage.getItem('userT')}`
      }
    })
  }
}
