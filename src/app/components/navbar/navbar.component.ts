import { Component, OnInit } from '@angular/core';
import {Emitters} from '../../emitters/emitter';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  authenticated = false;
  message = 'You are not logged in';


  
 constructor(private http: HttpClient) {
}

ngOnInit(): void {
  this.http.get('http://localhost:8000/auth/user/', {withCredentials: true}).subscribe(
    (user: any) => {
      this.message = `Hello ${user.username}`;
      Emitters.authEmitter.emit(true);
    },
    _err => {
      this.message = 'You are not logged in';
      Emitters.authEmitter.emit(false);
    }
  );
  Emitters.authEmitter.subscribe(
    (auth: boolean) => {
      this.authenticated = auth;
    }
  );
}

logout(): void {
  this.http.post('http://localhost:8000/auth/logout/', {}, {withCredentials: true})
    .subscribe(() => this.authenticated = false);
    
}

}