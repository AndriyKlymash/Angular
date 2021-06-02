import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post:Post;

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPost(value.id).subscribe(data=>{
        this.post=data;
      })

    })
  }

}
