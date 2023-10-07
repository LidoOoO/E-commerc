import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { Wish } from 'src/app/interfaces/wish';
import { CartService } from 'src/core/services/cart.service';
import { ProductsService } from 'src/core/services/products.service';
import { WishLService } from 'src/core/services/wish-l.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  allproducts:Products[] = []
  searchKey:string = ''
  allwish:any
  constructor(private _productsService:ProductsService , private _wish:WishLService , private _cartService:CartService){}

ngOnInit(): void {
    this.getall()
    this.getfav()
}

  getall(){
    this._productsService.getProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.allproducts = res.data
        
      }
    })
  }
  addfav(id:string){
    this._wish.addToWish(id).subscribe({
      next:(res)=>{
        console.log(res);
        return true
      }
    })
  }

  remfav(id:string){
    this._wish.removeFromWish(id).subscribe({
      next:(res)=>{
        console.log(res);
        return true
      }
    })
    
  }

  getfav(){
    this._wish.getFromWish().subscribe({
      next:(res)=>{
        console.log(res); 
        this.allwish = res.data
      }
    })
  }


  addToCart(id:string){
  this._cartService.addtocart(id).subscribe({
    next:(res)=>{
      console.log(res.numOfCartItems);
      this._cartService.number.next(res.numOfCartItems)

    }
  })
  }



}


