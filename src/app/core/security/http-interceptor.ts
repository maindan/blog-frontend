// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { inject, Injectable } from "@angular/core";
// import { catchError, Observable, throwError } from "rxjs";
// import { AuthService } from "./auth.service";


// @Injectable()
// export class CustomHttpInterceptor implements HttpInterceptor {

//   private authService: AuthService = inject(AuthService);

//   public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     let dupReq = req;
//     const token: string = this.authService.getToken()!;

//     if (!req.url.includes('auth') && !req.url.includes('recover_password')) {
//       dupReq = this.setHeader(req, token);
//     }

//     return next.handle(dupReq).pipe(
//       catchError((error:HttpErrorResponse) => {
//         return throwError(() => error);
//       })
//     )
//   }

//   private setHeader(req: HttpRequest<any>, token: string) {
//     return req.clone({
//       headers: req.headers.set('Authorization', token ? 'Bearer ' + token : '')
//     });
//   }
// }
