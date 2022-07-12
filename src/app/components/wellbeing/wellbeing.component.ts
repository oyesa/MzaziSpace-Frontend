import { Component, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/services/post.service';
import { Post } from "src/app/post";
import {Router} from '@angular/router';

@Component({
  selector: 'app-wellbeing',
  templateUrl: './wellbeing.component.html',
  styleUrls: ['./wellbeing.component.css']
})
export class WellbeingComponent {
  closeResult: string = '';
  post: string = '';
  selectedImage!:File|any;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  constructor(private modalService: NgbModal, private postService: PostService, private route:Router) {}
  ngOnInit(): void {}
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  uploadFile(event: any): void {
    this.selectedImage = event.target.files[0];
  }
  addPost(): void {
    const fd = new FormData();
    if (this.post.length > 10) {
      if (this.selectedImage) {
        fd.append('image', this.selectedImage, this.selectedImage.name);
      }
      fd.append('post', this.post);
     
      
    }
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  
  }
