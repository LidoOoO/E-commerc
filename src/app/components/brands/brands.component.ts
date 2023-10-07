import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/interfaces/brands';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands:Brands[] = []

  constructor(private _products:ProductsService){

  }

  ngOnInit(): void {
      this.getbrands();
  }

  getbrands(){
    this._products.getbrands().subscribe({
      next:(res)=>{
        console.log(res);
        this.brands = res.data;
      }
    })
  }

  
}
