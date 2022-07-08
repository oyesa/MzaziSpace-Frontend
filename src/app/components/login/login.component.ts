import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  // router: any;

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void { 
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }
  // loginUser = () => {
  //   if (this.form.valid) {
  //       this.isLoading = true;
  //       const loginCredentials: IAuthBody = {
  //           email: this.form.controls.email.value,
  //           password: this.form.controls.password.value
  //       };
  //       this.authService.authenticateUserWithServer(loginCredentials).subscribe(
  //           res => {
  //               this.isLoading = false;
  //               this.snackBar.showSuccessSnackBar(this.successMessage);

  loginProcess(){
    if(this.formGroup.valid){
      const loginCredentials: any = {
        CustomUser:{
        email: this.formGroup.controls['email'].value,
        password: this.formGroup.controls['password'].value
        }
    };
    
      this.authService.login(loginCredentials).subscribe(result =>{
        console.log(result)
        this.router.navigate(['/home']);
        // if(result.success){
          // console.log(result);
        //   alert('Logged in successfully');
        // }else{
        //   alert('Ooops')
        // }
        // this.router.navigate(['/home']);
        // console.log(result)
        // if(result.password){
          // console.log(result);
        //   alert('Logged in successfully');
        // }else{
        //   alert('Ooops')
        //   console.log(result)
        // }

      });
    }
  }

}
