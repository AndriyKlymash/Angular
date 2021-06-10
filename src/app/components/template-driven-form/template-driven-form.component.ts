import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  user = {
    login: '',
    password: ''
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(myForm: NgForm) {
    // console.log(myForm.login.value);
    // console.log(myForm.password.value);
    // console.log(this.user)
    console.log(myForm)
  }
}
