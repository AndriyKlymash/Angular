import {Component, Input} from '@angular/core';
import {IUser} from "../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  @Input()
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  goToDetail() {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user})
  }
}
