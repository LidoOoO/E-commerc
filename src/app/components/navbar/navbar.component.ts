import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn:boolean = false;
  numbercart:number = 0;
  constructor(private _auth:AuthService,private _getcart:CartService){
 this._auth.userdata.subscribe((res)=>{
  if(this._auth.userdata.getValue()){
    this.isLoggedIn = true;
  }
  else{
    this.isLoggedIn = false;
  }
  
 })
 this._getcart.number.subscribe((res)=>{
    this.numbercart = res
  }
 )
  }

  logOut(){
    this._auth.logOut();
  }


  

}
