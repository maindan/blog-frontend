import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPost } from "../interfaces/post";
import { environment } from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private http: HttpClient = inject(HttpClient);

  public getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${environment.apiUrl}/post/`);
  }

}
