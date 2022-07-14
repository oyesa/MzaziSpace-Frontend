import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profile: any
  profileForm: FormGroup
  showModal = false
  closeResult: string = '';
  userName: string
  token = this.authService.decodeToken(JSON.parse(localStorage.getItem('token')))

  constructor( private authService:AuthServiceService, private fb: FormBuilder, private modalService: NgbModal ) { }

  open(content:any) {
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onSubmit(text: string) {

  }


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
   updateProfile(user, myModal){
    this.open(myModal)
    this.showModal= true
    console.log(user)
    this.userName = user.user.username
    this.profileForm.patchValue({
      bio: user.bio
    })
   }

   saveProfile(){
    const body = {
      bio: this.profileForm.value.bio
    }
    this.authService.updateUserProfile(this.userName, body).subscribe(response => {
      this.getUserProfile()
      this.showModal =  false
    }, err => {
      console.log(err)
    })
   }

}
