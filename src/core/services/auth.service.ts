import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { CodeD } from 'src/app/interfaces/code-d';
import { ForgetData } from 'src/app/interfaces/forget-data';
import { LogData } from 'src/app/interfaces/log-data';
import { RegData } from 'src/app/interfaces/reg-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient , private _router:Router) {
    if(localStorage.getItem("userT")){
      this.getTok()
    }
  }
  

  userdata: BehaviorSubject<any> = new BehaviorSubject('') 


  getTok(){
    let encodedT = JSON.stringify(localStorage.getItem("userT"));
    let encoded = jwtDecode(encodedT)
    console.log(encoded);
    this.userdata.next(encoded)
  }

   register(data:RegData) : Observable<any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
   }

   login(data:LogData) : Observable<any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
   }

   forgetP(data:ForgetData): Observable<any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',data)
   }

   codeR(data:CodeD) : Observable<any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',data)
   }

   resetP(data:LogData) : Observable<any>{
    return this._http.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data)
   }

   logOut(){
    localStorage.removeItem("userT");
    this.userdata.next(null);
    this._router.navigate(["/login"])
   }
}
