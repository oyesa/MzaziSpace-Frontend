import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private pService: PostService) { }


  ngOnInit():void {
    this.AllPost();

  }
  AllPost() {
    this.pService.getAllPost().subscribe(posts =>{
      this.posts = posts;
      console.log(this.posts);
    })
    
 
  }
}


