import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categories } from 'src/app/interfaces/categories';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-slider-categories',
  templateUrl: './slider-categories.component.html',
  styleUrls: ['./slider-categories.component.css']
})
export class SliderCategoriesComponent implements OnInit{

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
        items: 6
      },
    },
    nav: true
  }








  allcate:Categories[]=[];

  constructor(private _productsService:ProductsService){
  }

  ngOnInit(): void {
    this.getAllCate();
  }

  getAllCate(){
    this._productsService.getcategories().subscribe({
      next:(res)=>{
        console.log(res);
        this.allcate = res.data
      }
    })
  }



}
