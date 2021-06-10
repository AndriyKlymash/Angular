import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  /*inputs objects*/
  loginControl = new FormControl('def login', [Validators.required, Validators.minLength(2),
    this.customValidator]);
  passwordControl = new FormControl('def password');

  /*form object*/
  myFormGroup: FormGroup = new FormGroup({
    login: this.loginControl,
    password: this.passwordControl
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.myFormGroup)
  }

  customValidator(control: AbstractControl) {
    console.log(control);
    if (control.value.includes('fuck')) {
      return {fuckPresent: true}
    }
    return null
  }
}
