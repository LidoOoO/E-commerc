import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeD } from 'src/app/interfaces/code-d';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-code-r',
  templateUrl: './code-r.component.html',
  styleUrls: ['./code-r.component.css']
})
export class CodeRComponent {
  load:boolean = false;
  apiErr:string = '';
  constructor(private _AuthService:AuthService ,private _router:Router){}

CodeR:FormGroup = new FormGroup({
  resetCode:new FormControl("",[Validators.required, Validators.pattern(/^[0-9]{5,6}$/)])
})


coder(form:FormGroup){ 
  console.log("Hii",form.value);
  if(form.valid){
    this.load = true;
    this._AuthService.codeR(form.value).subscribe({
      next:(res:CodeD)=>{
        console.log(res);     
        this.load = false;
        this._router.navigate(['./resetP'])
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
