import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Profile } from 'src/app/classes/profile';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  profile!:Profile[]
  profileEditForm:FormGroup = new FormGroup({})


  constructor(private ServicesService:ServicesService,
    private formBuilder:FormBuilder) { }

ngOnInit(): void {
this.Profile()

//buid edit form
this.profileEditForm=this.formBuilder.group({
'bio':new FormControl(''),
'image':new FormControl(''),
'phone_number':new FormControl(''),


})

}
Profile():void{
// console.log(this.ServicesService.Profile().subscribe(Profile))
this.ServicesService.Profile().subscribe(profile=>{
this.profile=profile
console.log(profile)
})
}


updateProfile():void{
console.log(this.profileEditForm.value)
}

}



