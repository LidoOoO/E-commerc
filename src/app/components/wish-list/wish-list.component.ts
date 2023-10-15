import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { Wish } from 'src/app/interfaces/wish';
import { CartService } from 'src/core/services/cart.service';
import { WishLService } from 'src/core/services/wish-l.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {


constructor(private _wish:WishLService , private cart:CartService){

}
wishl:Wish = {} as Wish 


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

        this.wishl = res
        console.log(this.wishl);
        
      }
    })
  }

  ngOnInit(): void {
      this.getwish();
  }

  addToCart(id:string){
    this.cart.addtocart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.cart.number.next(res.numOfCartItems)
      }
    })
    }
}


