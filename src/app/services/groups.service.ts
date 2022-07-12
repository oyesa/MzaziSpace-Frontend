import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Groups } from 'src/app/classes/groups';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  api_link: string = "https://mzazispace.herokuapp.com/"

  constructor(private http: HttpClient) { }

  Groups():Observable<Groups[]>{
    return this.http.get<Groups[]>(this.api_link + `request/  groups/`)
  }
}
