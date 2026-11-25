import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Form1 } from './components/form1/form1';

@Component({
  imports: [CommonModule, ReactiveFormsModule, Form1],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
  email = new FormControl("test@test.com");
  password = new FormControl("test");

  login() {
    console.log(this.email.value);
    console.log(this.password.value);
  }

  reset() {
    this.email.setValue("");
    this.password.setValue("");
  }
}
