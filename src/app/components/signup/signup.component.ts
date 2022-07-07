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
    private http: HttpClient,
    private router: Router
    ) {}

    response!: any;
    message!: string;

  ngOnInit(): void {}

  submit(username: string, email: string, password: string,f_name: string,l_name:string,user_role:string): void {
    console.log(username, email, password,f_name,l_name,user_role)
    this.http.post('http://localhost:8000/auth/register/', {
        username: username,
        email: email,
        password: password,
        f_name:f_name,
        l_name:l_name,
        user_role:user_role
      })
      .subscribe((res) => {
        this.response = res;
        this.message = this.response.message;
        this.router.navigate(['/login']);
      });
  }
}
