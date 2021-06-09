import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user-details-from-server',
  templateUrl: './user-details-from-server.component.html',
  styleUrls: ['./user-details-from-server.component.css']
})
export class UserDetailsFromServerComponent implements OnInit {

  userFromServer: IUser;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      let id = value.id;
      this.userService.getUserById(id).subscribe(response => this.userFromServer = response)
    })

    this.activatedRoute.data.subscribe(data=>console.log(data))
  }

  ngOnInit(): void {
  }
}
