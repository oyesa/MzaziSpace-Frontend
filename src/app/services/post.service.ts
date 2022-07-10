import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  api_link: string = "https://localhost:8000/"

  constructor(private http: HttpClient) { }

  getAllPost(){
    return this.http.get(this.api_link + `request/posts/`)
  }
}




