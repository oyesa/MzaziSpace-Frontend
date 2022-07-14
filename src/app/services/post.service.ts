import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  api_link: string = "https://mzazispace.herokuapp.com/"

  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }
  )

requestOptions = { headers: this.headers }


  constructor(private http: HttpClient) { }

  getPost():Observable<any>{
    return this.http.get(this.api_link + `request/api/post/`,this.requestOptions).pipe(map(respose=>respose))
  }
  postPost():Observable<any>{
    return this.http.post(this.api_link + `request/api/post/`,this.requestOptions).pipe(map(respose=>respose))
  }
}




