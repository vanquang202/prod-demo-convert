import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {

  if (!localStorage.getItem('user')) return (new Router()).navigate(["/register"]);;
  return true;
};
