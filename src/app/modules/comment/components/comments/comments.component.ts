import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../../../app-services/data-transfer.service";
import {IUser} from "../../../user/models/IUser";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  choosenUser:IUser

  constructor(private dataTransfer:DataTransferService) {
  }

  ngOnInit(): void {
    this.choosenUser= this.dataTransfer.store.getValue();
  }
}
