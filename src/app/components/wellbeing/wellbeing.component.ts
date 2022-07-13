import {Component, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { groups } from 'src/app/classes/groups';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-wellbeing',
  templateUrl: './wellbeing.component.html',
  styleUrls: ['./wellbeing.component.css']
})
export class WellbeingComponent {
  closeResult: string = '';
  post: any;
  selectedImage!:File|any;
  @Output() newPost: EventEmitter<groups> = new EventEmitter();
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    
  }
  
  uploadFile(event: any): void {
    this.selectedImage = event.target.files[0];
  }
  addPost(): void {
    const fd = new FormData();
    fd.append('image', this.selectedImage, this.selectedImage.name);
    fd.append('post', this.post);
     
  }

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
  
  }
