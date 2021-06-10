import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent implements OnInit {
  users:any;
  myForm = new FormGroup({
    id: new FormControl(0)
  });

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users=value);
  }

  save() {
    console.log(this.myForm.controls.id.value)
  }
}
