import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogData } from 'src/app/interfaces/log-data';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  load:boolean = false;
  apiErr:string = '';
  constructor(private _AuthService:AuthService ,private _router:Router){}

log:FormGroup = new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,9}$/)])
})


Login(form:FormGroup){ 
  console.log("Hii",form.value);
  if(form.valid){
    this.load = true;
    this._AuthService.login(form.value).subscribe({
      next:(res:any)=>{
        console.log(res);     
        this.load = false;
        localStorage.setItem("userT",res.token)
        this._AuthService.getTok()
        this._router.navigate(['./home'])
      },
      error:(error)=>{
        if(error.error.message = "fail"){
            this.apiErr = "Email or Password Incorrect"
            this.load = false;
        }
      
      
      console.log(error);
      
      }
    })
  }
}
}
