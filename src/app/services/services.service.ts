import { Injectable } from '@angular/core';
import { Users } from '../classes/users';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // private apiUrl = 'http://127.0.0.1:8000'

  constructor() { }

  // getUser():Observable<any>{
  //   return this.http.get<any[]>(this.apiUrl)
  // }
  // registerUser(userData):Observable<any>{
  //   return this.http.post(this.apiUrl+'/auth/register/',userData)
  // }
}

