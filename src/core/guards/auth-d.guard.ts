import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authDGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  if(localStorage.getItem("userT")){
    _router.navigate(['/home'])
    return false;
  }else{
    return true;
  }
};
