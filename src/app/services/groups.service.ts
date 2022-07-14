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
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }
  )

requestOptions = {headers: this.headers}

  constructor(private http: HttpClient) { }

  getGroups():Observable<any>{
    return this.http.get(this.api_link + `request/api/group/`,this.requestOptions)
    .pipe(map(response=>response))
  }
  postGroups(data):Observable<any>{
    return this.http.post(this.api_link + `request/api/group/`,data,this.requestOptions).pipe(map(response => response));
  }
}
