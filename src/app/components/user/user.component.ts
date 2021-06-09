import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  @Input()
  singleUser: IUser;

  @Output()
  lift= new EventEmitter()

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }


  userDetails() {
    this.router.navigate(['detailsFromState', this.singleUser.id], {
      relativeTo: this.activatedRoute,
      state: this.singleUser
    })
  }

  lifting() {
    this.lift.emit(this.singleUser);
  }
}
