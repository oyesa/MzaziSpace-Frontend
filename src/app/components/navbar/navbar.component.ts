import { Component, OnInit } from '@angular/core';
import {Emitters} from '../../emitters/emitter';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  authenticated = false;
  message = 'You are not logged in';
  userToken: string



 constructor(private http: HttpClient, private router: Router) {
}

ngOnInit(): void {
  this.userToken = localStorage.getItem('token')
  // this.http.get('https://mzazispace.herokuapp.com/auth/user/', {withCredentials: true}).subscribe(
  //   (user: any) => {
  //     this.message = `Hello ${user.username}`;
  //     Emitters.authEmitter.emit(true);
  //   },
  //   _err => {
  //     this.message = 'You are not logged in';
  //     Emitters.authEmitter.emit(false);
  //   }
  // );
  // Emitters.authEmitter.subscribe(
  //   (auth: boolean) => {
  //     this.authenticated = auth;
  //   }
  // );
}

logout(): void {
 localStorage.removeItem('token')
 this.router.navigate(['/']);
}

}
