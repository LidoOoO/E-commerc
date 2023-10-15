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
  wishl:Wish = {} as Wish 
  constructor(private _productsService:ProductsService , private _wish:WishLService , private _cartService:CartService){}

ngOnInit(): void {
    this.getall()
    this.getwish()
}

removefromwish(id:string){
  this._wish.removeFromWish(id).subscribe({
    next:(res)=>{
      this.getwish();
    }
  })
}


getwish(){
  this._wish.getFromWish().subscribe({
    next:(res)=>{
      console.log(res);
      this.wishl = {} as Wish;
      this.wishl = res
      console.log(this.wishl);
    }
  })
}


  getall(){
    this._productsService.getProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.allproducts = res.data
      }
    })
  }


  addtowish(id:string){
    this._wish.addToWish(id).subscribe({
      next:(res)=>{
        this.getwish()
      }
    })
  }

  show(id:string){
    for(let i = 0 ; i < this.wishl.data.length; i++){
      if(id == this.wishl.data[i].id){
        return true;
      }
    }
    return false
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


