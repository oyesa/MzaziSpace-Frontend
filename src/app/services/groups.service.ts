import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { groups } from '../classes/groups';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  api_link: string = "https://mzazispace.herokuapp.com/"

  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-TYpe',
      'Authorization': 'Bearer' + JSON.parse(localStorage.getItem('token'))
    }
  )

  requestOptions = {headers: this.headers}
  constructor(private http: HttpClient) { }

  Groups():Observable<any[]>{
    return this.http.get<groups[]>(this.api_link + `request/api/group/`).pipe(map(response=>response))
  }
}
