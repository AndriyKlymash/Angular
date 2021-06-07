import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:IUser

  constructor(private router: Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>{
      this.user=this.router.getCurrentNavigation()?.extras.state as IUser;
    })
  }

  ngOnInit(): void {
  }
}
