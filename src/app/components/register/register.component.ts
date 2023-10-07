import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegData } from 'src/app/interfaces/reg-data';
import { AuthService } from 'src/core/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  load:boolean = false;
  apiErr:string = '';
  constructor(private _AuthService:AuthService ,private _router:Router){}

register:FormGroup = new FormGroup({
  name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern(/^[a-zA-Z]*$/)]),
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,9}$/)]),
  rePassword:new FormControl("",[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,9}$/)]),
  phone:new FormControl("",[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
})


Register(form:FormGroup){ 
  // console.log("Hii",form.value);
  if(form.valid){
    this.load = true;
    this._AuthService.register(form.value).subscribe({
      next:(res:RegData)=>{
        console.log(res);     
        this.load = false;
        this._router.navigate(['./login'])
      },
      error:(error)=>{
        if(error.error.message = "fail" && error.statusText == "Conflict"){
          this.apiErr = "Account Already Exists"
          this.load = false;
        }

        else if(error.error.message = "fail"){
            this.apiErr = "Password confirmation is incorrect"
            this.load = false;
        }
      
      
      // console.log(error);
      
      }
    })
  }
}
}
