import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  _id:string = ''
  url:string = ''
  shippingAddress:FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  })


  constructor(private _cartService:CartService){

  }

ngOnInit(): void {
    this.getcartid()
}

  getcartid(){
    this._cartService.getcart().subscribe({
      next:(res)=>{
        console.log(res);
        this._id = res.data._id
        console.log(this._id);
        
      }
    })
  }

  online(){
    this._cartService.payment(this._id,this.shippingAddress.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.url = res.session.url
        console.log(this.url);
        
        window.open(this.url)
      }
    })
  }
}
