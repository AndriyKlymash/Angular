import {Component, OnInit} from '@angular/core';
import {UserService} from "../../sevices/user.service";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails:IUser;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params.id;
      // console.log(id)
      this.userService.getUser(id).subscribe(user=>this.userDetails=user)
    })
  }
}
