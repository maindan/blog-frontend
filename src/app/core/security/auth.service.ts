import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, lastValueFrom } from "rxjs";
import {jwtDecode} from "jwt-decode";
import { IAuth, ILoginRes, IUserLogin } from "../../shared/interfaces/security/auth";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";
import { Router } from "@angular/router";
import { UserService } from "./user.service";
import { IUser } from "../../shared/interfaces/security/user";

export const AUTH_TOKEN_KEY: string = 'authToken';
export const AUTH_TOKEN_REFRESH: string = 'refreshToken';
export const USER_ID: string = 'userId';
const USER_EMAIL: string = 'userEmail';
const USER_NAME: string = 'userName';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _loggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private http:HttpClient = inject(HttpClient);
  private router:Router = inject(Router);
  private userService: UserService = inject(UserService);

  get loggedIn():BehaviorSubject<boolean> {
    const token: string | null = this.getToken();
    if(token && token !== "undefined") {
      this.setLoggedIn(true);
    }
    return this._loggedIn;
  }

  private setLoggedIn(value:boolean):void {
    this._loggedIn.next(value);
  }

  public getToken():string | null {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  private setToken(token:string) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  public getRefreshToken():string | null {
    return localStorage.getItem(AUTH_TOKEN_REFRESH);
  }

  private setRefreshToken(token:string) {
    localStorage.setItem(AUTH_TOKEN_REFRESH, token);
  }

  private decodeToken(token: string):IAuth {
    return jwtDecode(token);
  }

  public login(userLogin: IUserLogin):Promise<ILoginRes> {
    return lastValueFrom(this.http.post<ILoginRes>(`${environment.apiUrl}/token/`, userLogin))
  }

  public setLogin(res: ILoginRes) {

    this.setToken(res.access);
    this.setRefreshToken(res.refresh);
    const data: IAuth = this.decodeToken(res.access);
    localStorage.setItem(USER_ID, `${data.user_id}`);
    this.setLoggedIn(true);
    this.setUser(data.user_id);
  }

  public setUser(id:number):void {
    this.userService.reqUserData(id)
      .subscribe({
        next: (value: IUser) => {
          this.userService.setUserData(value);
        }
      })
  }

  public logout() {
    localStorage.clear();
    this.setLoggedIn(false);
    this.router.navigate(['']);
  }

}
