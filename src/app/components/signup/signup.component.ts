import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    // public http: HttpClient,
    // public router: Router
    ) {}

  ngOnInit(): void {}

  // submit(userName: string, userEmail: string, userPassword: string): void {
  //   console.log(userName, userEmail, userPassword)
  //   this.http
  //     .post('http://localhost:8000/auth/register/', {
  //       username: userName,
  //       email: userEmail,
  //       password: userPassword,
  //     })
  //     .subscribe(()=> this.router.navigate(['/login']));
  // }
}
