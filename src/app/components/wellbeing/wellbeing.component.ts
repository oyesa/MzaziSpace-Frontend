import { Component, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { groups } from 'src/app/classes/groups';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-wellbeing',
  templateUrl: './wellbeing.component.html',
  styleUrls: ['./wellbeing.component.css'],
})
export class WellbeingComponent {
  closeResult: string = '';
  post: any;
  selectedImage!: File | any;
  wellbeingForm: FormGroup;

  @Output() newPost: EventEmitter<groups> = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private groupsService: GroupsService

  ) {}
  ngOnInit(): void {
    this.allGroups();
    this.wellbeingForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
      categories: new FormControl('', [Validators.required]),
    });
  }

  uploadFile(event: any): void {
    this.selectedImage = event.target.files[0];
  }
  addPost(): void {
    const fd = new FormData();
    
    const body={'description':this.wellbeingForm.value.description, 'categories':'wellbeing'}
    console.log(body)
    this.groupsService.postGroups(body).subscribe(res=>{
      console.log(res)
    })
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  allGroups() {
    this.groupsService.getGroups().subscribe((response) => {
      this.post = response;
      console.log(this.post);
    });
  }

  // allPosts(){
  //   if(this.formGroup.valid){
  //     const groupInfo:any = {
  //       description:this.formGroup.controls['description'].value,
  //       image:this.formGroup.controls['image'].value
  //     }
  //   };
  //   this.groupsService.postGroups(groupInfo).
  // }
}
// function groupInfo(groupInfo: any) {
//   throw new Error('Function not implemented.');
// }
