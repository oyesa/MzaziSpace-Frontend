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
 
  image_url='https://www.flaticon.com/free-icon/user_3237472?term=profile%20picture&page=1&position=25&page=1&position=25&related_id=3237472&origin=tag'
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




