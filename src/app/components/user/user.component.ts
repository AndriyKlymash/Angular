import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user:IUser;

  @Output()
  details=new EventEmitter<IUser>()

  constructor() { }

  ngOnInit(): void {
  }

  goToDetails() {
    this.details.emit(this.user);
  }
}
