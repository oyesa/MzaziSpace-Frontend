import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../classes/profile';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  API_URL='https://mzazispace.herokuapp.com/auth'
 

  constructor(private http:HttpClient) { }

  Profile():Observable<Profile[]>{
    return this.http.get<Profile[]>(`${this.API_URL}/profile/username/`);
  }

}




