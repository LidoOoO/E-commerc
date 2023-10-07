import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetData } from 'src/app/interfaces/forget-data';
import { RegData } from 'src/app/interfaces/reg-data';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-forget-p',
  templateUrl: './forget-p.component.html',
  styleUrls: ['./forget-p.component.css']
})
export class ForgetPComponent {
  load:boolean = false;
  apiErr:string = '';
  constructor(private _AuthService:AuthService ,private _router:Router){}

Forget:FormGroup = new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email])
})


forget(form:FormGroup){ 
  console.log("Hii",form.value);
  if(form.valid){
    this.load = true;
    this._AuthService.forgetP(form.value).subscribe({
      next:(res:ForgetData)=>{
        console.log(res);     
        this.load = false;
        this._router.navigate(['./coder'])
      },
      error:(error)=>{
        this.apiErr = error.error.message 
        this.load = false;
        console.log(error);
      }
    })
  }
}
}
