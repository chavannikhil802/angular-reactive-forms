import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-form1',
  styleUrl: './form1.css',
  templateUrl: './form1.html',
})
export class Form1 {

  loginForm = new FormGroup({
    name: new FormControl("nikhil", [Validators.required]),
    email: new FormControl("test@test.com", [Validators.required, Validators.email]),
    password: new FormControl("1234", [Validators.required, Validators.minLength(6)])
  });

  get name() {
    return this.loginForm.get("name");
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  handleProfile() {
    console.log(this.loginForm.value);
  }

  reset() {
    this.loginForm.setValue({
      name: '',
      email: '',
      password: ''
    });
  }
}
