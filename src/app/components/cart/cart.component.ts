import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartD:Cart = {} as Cart

  constructor(private _cartService:CartService){}

  ngOnInit(): void {
      this.getCart()
  }


  getCart(){
    this._cartService.getcart().subscribe({
      next:(res)=>{
        console.log(res);
        this.cartD = res
        console.log(this.cartD);
        
      }
    })
  }
  
  updatecount(count:number,id:string){
    if(count == 0){
      this.deletcart(id);
    }
    this._cartService.updatecart(count,id).subscribe({
      next:(res)=>{
        console.log(res);
        this.cartD = res
      }
    })
  }

  deletcart(id:string){
    this._cartService.deletcart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.cartD = res
        this._cartService.number.next(res.numOfCartItems)
      }
    })
  }


  clearcart(){
    this._cartService.clearcart().subscribe({
      next:(res)=>{
        console.log(res);
        this.cartD = res
        this._cartService.number.next(res.numOfCartItems = 0) 
      }
    })
  }
}
