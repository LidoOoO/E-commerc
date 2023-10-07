import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/interfaces/categories';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  allcategories:Categories[] = []

  constructor(private _productsService:ProductsService){

  }

  ngOnInit(): void {
      this.getcategories()
  }

  getcategories(){
    this._productsService.getcategories().subscribe({
      next:(res)=>{
        console.log(res);
        this.allcategories = res.data
      }
    })
  }

}
