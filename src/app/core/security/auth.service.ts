// import { inject, Injectable } from "@angular/core";
// import { BehaviorSubject, lastValueFrom } from "rxjs";
// import {jwtDecode} from "jwt-decode";
// import { IAuth, ILoginRes, IUserLogin } from "../../shared/interfaces/security";
// import { HttpClient } from "@angular/common/http";
// import { environment } from "../../../environments/environment.development";
// import { Router } from "@angular/router";

// export const AUTH_TOKEN_KEY: string = 'authToken';
// export const USER_ID: string = 'userId';
// const USER_EMAIL: string = 'userEmail';
// const USER_NAME: string = 'userName';

// @Injectable({
//   providedIn: "root"
// })
// export class AuthService {
//   private _loggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
//   private http:HttpClient = inject(HttpClient);
//   private router:Router = inject(Router);

//   get loggedIn():boolean {
//     const token: string | null = this.getToken();
//     if(token && token !== "undefined") {
//       this.setLoggedIn(true);
//     }
//     return this._loggedIn.getValue();
//   }

//   private setLoggedIn(value:boolean):void {
//     this._loggedIn.next(value);
//   }

//   public getToken():string | null {
//     return localStorage.getItem(AUTH_TOKEN_KEY);
//   }

//   private setToken(token:string) {
//     localStorage.setItem(AUTH_TOKEN_KEY, token);
//   }

//   private decodeToken(token: string):IAuth {
//     return jwtDecode(token);
//   }

//   public login(userLogin: IUserLogin):Promise<ILoginRes> {
//     return lastValueFrom(this.http.post<ILoginRes>(`${environment.apiUrl}/auth/login`, userLogin))
//   }

//   public setLogin(token: string) {
//     this.setToken(token);
//     const data: IAuth = this.decodeToken(token);
//     localStorage.setItem(USER_ID, `${data.userId}`);
//     localStorage.setItem(USER_EMAIL, data.sub);
//     localStorage.setItem(USER_NAME, data.username);
//     this.setLoggedIn(true);
//   }

//   public logout() {
//     localStorage.clear();
//     this.setLoggedIn(false);
//     this.router.navigate(['login']);
//   }

// }
