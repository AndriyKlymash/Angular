import {Component} from '@angular/core';
import {IPost} from "../../models/IPost";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent{

  post: IPost;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>{
      this.post=this.router.getCurrentNavigation()?.extras.state as IPost
    })
  }

}
