import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Community } from 'src/app/classes/community';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  api_link: string = "https://mzazispace.herokuapp.com/"

  constructor(private http: HttpClient) { }

  Community():Observable<Community[]>{
    return this.http.get<Community[]>(this.api_link + `request/community/`)
  }
}
