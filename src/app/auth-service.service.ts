// import { baseUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  // readonly APIUrl = "http://127.0.0.1:8000";
  private httpOptions: any;

  constructor(private http: HttpClient) {}
  login(data):Observable<any>{
    // console.log('mzazi space')
    return this.http.post('https://mzazispace.herokuapp.com/auth/login/',data);
  }
  signup(data):Observable<any>{
    // console.log('mzazi space')
    return this.http.post('https://mzazispace.herokuapp.com/auth/register/',data);
  }
  
  // loginUser(data: any): Observable<any>{
  //   var user = JSON.stringify(data)
  //   return this.http.post<any>(this.APIUrl+'/auth/login/',user, {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json",
  //     })
  //   })
  // }

  // registerUser(data: any): Observable<any>{
  //   var newUser = JSON.stringify(data)
  //   console.log(newUser)
  //   return this.http.post<any>(this.APIUrl+'/auth/register/', newUser, {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json",
  //     })
  //   })
  // }
}
