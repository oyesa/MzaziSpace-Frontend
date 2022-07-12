import { Component, OnInit } from '@angular/core';
import { Profile } from '../../classes/profile';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!:Profile[]
  // posts!:Posts[]
 
  prof_pic_url='http://res.cloudinary.com/dim8pysls/image/upload/v1639001486/x3mgnqmbi73lten4ewzv.png'
  image_url='https://res.cloudinary.com/'
  constructor(private authService: AuthServiceService, private router: Router) { }
  
  
  ngOnInit(): void {
    // this.Profile()
    // this.Posts()
   
    
  }
  // Profile():void{
  //   // console.log(this.ServicesService.Profile().subscribe(Profile))
  //   this.ServicesService.Profile().subscribe(profile=>{
  //     this.profile=profile
  //     console.log(profile)
  //   })
  // }

//   Posts():void{
//     this.ServicesService.Posts().subscribe(posts=>{
//       this.posts=posts
//       for(let item of this.posts){
//         console.log(this.image_url)
//       }
//       // console.log(posts)
//     })
  
// }
}
