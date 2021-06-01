import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";
import {data} from "browserslist";

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  singlePost:Post;

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value);
      this.postService.getSinglePost(value.id).subscribe(data=>{
        console.log(data);
        this.singlePost=data;
      });
    })
  }

  ngOnInit(): void {
  }

}
