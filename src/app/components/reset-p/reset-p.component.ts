import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogData } from 'src/app/interfaces/log-data';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-reset-p',
  templateUrl: './reset-p.component.html',
  styleUrls: ['./reset-p.component.css']
})
export class ResetPComponent {
  load:boolean = false;
  apiErr:string = '';
  constructor(private _AuthService:AuthService ,private _router:Router){}

upP:FormGroup = new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  newPassword:new FormControl("",[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,9}$/)]),
})


updateP(form:FormGroup){ 
  console.log("Hii",form.value);
  if(form.valid){
    this.load = true;
    this._AuthService.resetP(form.value).subscribe({
      next:(res:any)=>{
        console.log(res);     
        this.load = false;
        localStorage.setItem("userT",res.token)
        this._AuthService.getTok(); 
        this._router.navigate(['./home'])
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
