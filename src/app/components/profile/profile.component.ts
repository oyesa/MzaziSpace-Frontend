import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  inboundClick = true;
  outboundClick = true;
  profile: any
  profileForm: FormGroup
  token = this.authService.decodeToken(JSON.parse(localStorage.getItem('token')))

  constructor( private authService:AuthServiceService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.getUserProfile()
    this.profileForm = this.fb.group({
      bio: [''],
      prof_pic: ['']
    })
  }
 

   getUserProfile(){

    this.authService.getUserProfile(this.token["user_data"]["username"]).subscribe(response => {
      
      this.profile = response['profile']
      console.log(response)
    }, err =>{
      console.log(err)
    })
   }
   updateProfile(user){

    this.profileForm.patchValue({
      bio: user.bio
    })

   }

   
}
