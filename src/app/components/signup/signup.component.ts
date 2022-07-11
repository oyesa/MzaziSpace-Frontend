import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
// import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
  
    private authService: AuthServiceService,
    private http: HttpClient,
    private router: Router
    ) {}


    response!: any;
    message!: string;

  ngOnInit(): void {
    this.initForm();
  }
  
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
      f_name: new FormControl('',[Validators.required]),
      l_name: new FormControl('',[Validators.required]),
      user_role: new FormControl('',[Validators.required]),
    });
  }
  signupProcess(){
    if(this.formGroup.valid){
      const loginCredentials: any = {
        CustomUser:{
        email: this.formGroup.controls['email'].value,
        password: this.formGroup.controls['password'].value,
        username: this.formGroup.controls['username'].value,
        f_name: this.formGroup.controls['f_name'].value,
        l_name: this.formGroup.controls['l_name'].value,
        user_role: this.formGroup.controls['user_role'].value
        }
    };
    
      this.authService.signup(loginCredentials).subscribe(result =>{
        console.log('Here we are',result)
        this.router.navigate(['/login']);
        // if(result.email){
        //   console.log(result);
        //   alert("Registered successfully");
        // }else{
        //   alert('Holla!!You have been signed up to Mzazi Space')
        // }

      });
    }
  }


//   submit(username: string, email: string, password: string,f_name: string,l_name:string,user_role:string): void {
//     console.log(username, email, password,f_name,l_name,user_role)
//     this.http.post('http://localhost:8000/auth/register/', {
//         username: username,
//         email: email,
//         password: password,
//         f_name:f_name,
//         l_name:l_name,
//         user_role:user_role
//       })
//       .subscribe((res) => {
//         this.response = res;
//         this.message = this.response.message;
//         this.router.navigate(['/login']);
//       });
//   }

  
}
