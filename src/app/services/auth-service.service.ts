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
    return this.http.post(`${this.url}/auth/register/`,data).pipe(map(responce => responce));
  }

  getUser(userName): Observable<any>{

    return this.http.get(`${this.url}/auth/user/`).pipe(map(responce => responce));
  }

  getUserProfile(userName): Observable<any>{
    return this.http.get(`${this.url}/auth/profile/${userName}/`, this.requestOptions).pipe(map(responce => responce))
  }
  decodeToken(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

updateUserProfile(userName, data): Observable<any>{
  return this.http.patch(`${this.url}/auth/profile/${userName}/`,data,this.requestOptions).pipe(map(responce => responce))
}
}

