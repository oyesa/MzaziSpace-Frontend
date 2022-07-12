// import { baseUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  url = "https://mzazispace.herokuapp.com"
  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }
  )

requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) {}
  login(data):Observable<any>{
    return this.http.post(`${this.url}/auth/login/`,data).pipe(map(responce => responce));
  }
  signup(data):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/auth/register/',data);
  }

  getUser(){
    return this.http.get('http://127.0.0.1:8000/auth/user/')
  }
  getUserProfile(userName): Observable<any>{
    console.log(this.requestOptions)
    return this.http.get(`${this.url}/auth/profile/${userName}/`, this.requestOptions).pipe(map(responce => responce))
  }
}
