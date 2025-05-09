// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from './auth.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   const router = inject(Router);
//   const authService = inject(AuthService);

//   if (!authService.loggedIn) {
//     router.navigate(['login']);
//     return false
//   }

//   return true;
// };

// export const redirectLogin: CanActivateFn = (route, state) => {
//   const router = inject(Router);
//   const authService = inject(AuthService);

//   if (authService.loggedIn) {
//     router.navigate(['dashboard']);
//     return false
//   }

//   return true;
// };
