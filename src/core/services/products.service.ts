import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private _httpclient:HttpClient) { }


  getProducts():Observable<any> {
    return this._httpclient.get("https://ecommerce.routemisr.com/api/v1/products")
  }

  getcategories():Observable<any> {
    return this._httpclient.get("https://ecommerce.routemisr.com/api/v1/categories")
  }


  getProductById(id:string):Observable<any> {
    return this._httpclient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getbrands():Observable<any>{
    return this._httpclient.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
}
