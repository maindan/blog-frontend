import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../../shared/interfaces/security/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http: HttpClient = inject(HttpClient);
  private userData: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);

  public reqUserData(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${environment.apiUrl}/user/${id}/`);
  }

  public setUserData(data: IUser):void {
    this.userData.next(data);
  }

  get getUserData():BehaviorSubject<IUser | null> {
    return this.userData;
  }

}
