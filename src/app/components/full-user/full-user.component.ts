import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
import {ActivatedRoute} from "@angular/router";
import {data} from "browserslist";

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  singleUser:User;

  constructor(private activatedRoute:ActivatedRoute,private userService:UserService) {

    this.activatedRoute.params.subscribe(value => {
      this.userService.getSingleUser(value.id).subscribe(data=>this.singleUser=data);
    })
  }

  ngOnInit(): void {
  }

}
