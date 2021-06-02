import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[]

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getComment().subscribe(value => {
      this.comments = value;
    })
  }

}
