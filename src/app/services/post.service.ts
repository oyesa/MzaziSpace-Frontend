import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { posts } from 'src/app/classes/post';
import { Post } from '../post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  api_link: string = "https://mzazispace.herokuapp.com/"

  constructor(private http: HttpClient) { }

  Post():Observable<Post[]>{
    return this.http.get<Post[]>(this.api_link + `request/posts/`)
  }
}




