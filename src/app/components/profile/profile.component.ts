import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/classes/profile';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!:Profile[]
 
  prof_pic_url='http://res.cloudinary.com/dim8pysls/image/upload/v1639001486/x3mgnqmbi73lten4ewzv.png'
  constructor(private ServicesService:ServicesService) { }
  
  
  ngOnInit(): void {
    this.Profile()
   
    
  }
  Profile():void{
    // console.log(this.ServicesService.Profile().subscribe(Profile))
    this.ServicesService.Profile().subscribe(profile=>{
      this.profile=profile
      console.log(profile)
    })
  }
  
}




