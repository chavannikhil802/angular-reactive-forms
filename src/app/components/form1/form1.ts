import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-form1',
  styleUrl: './form1.css',
  templateUrl: './form1.html',
})
export class Form1 {

  loginForm = new FormGroup({
    name: new FormControl("nikhil"),
    email: new FormControl("test@test.com"),
    password: new FormControl("1234")
  });

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
