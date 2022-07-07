import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/services/post.service';
import { Post } from "src/app/post";

@Component({
  selector: 'app-singlefathers',
  templateUrl: './singlefathers.component.html',
  styleUrls: ['./singlefathers.component.css']
})
export class SinglefathersComponent {
  
  closeResult: string = '';
  
  constructor(private modalService: NgbModal, private postService: PostService ) {}
    
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
}
