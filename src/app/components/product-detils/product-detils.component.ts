import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Products } from 'src/app/interfaces/products';
import { CartService } from 'src/core/services/cart.service';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-product-detils',
  templateUrl: './product-detils.component.html',
  styleUrls: ['./product-detils.component.css']
})
export class ProductDetilsComponent {

  productId:string = ''
  productsDetils:Products = {} as Products


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }





  constructor(private _activatedRoute:ActivatedRoute , private _cartService:CartService, private _productsService:ProductsService){
    this._activatedRoute.paramMap.subscribe((res:any)=>{
      console.log(res.params.id);
      this.productId = res.params.id;
    })

    this._productsService.getProductById(this.productId).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.productsDetils = res.data;
        console.log(this.productsDetils.imageCover);
        
      }
    })
  }



  addToCart(id:string){
    this._cartService.addtocart(id).subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
    }

}
