import { Component, OnInit } from '@angular/core';
import { Profile } from '../../classes/profile'
import { ServicesService } from 'src/app/services/services.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any
  profileForm: FormGroup

  prof_pic_url='http://res.cloudinary.com/dim8pysls/image/upload/v1639001486/x3mgnqmbi73lten4ewzv.png'
  image_url='https://res.cloudinary.com/'
  constructor(private ServicesService:ServicesService, private authService:AuthServiceService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.getUserProfile()
    this.profileForm = this.fb.group({
      bio: [''],
      prof_pic: ['']
    })
  }
  // Profile():void{
  //   // console.log(this.ServicesService.Profile().subscribe(Profile))
  //   this.ServicesService.Profile().subscribe(profile=>{
  //     this.profile=profile
  //     console.log(profile)
  //   })
  // }

   getUserProfile(){
    this.authService.getUserProfile('Nanzala').subscribe(response => {
      this.profile = response['profile']
      console.log(this.profile)
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
