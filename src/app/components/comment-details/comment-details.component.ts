import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: Comment;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>{
      this.comment = this.router.getCurrentNavigation()?.extras.state as Comment;
    })
  }

  ngOnInit(): void {
    // console.log(history.state)
  }
}
