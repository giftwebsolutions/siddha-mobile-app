import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone:false,
})
export class RegisterComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (form.value.password !== form.value.confirmPassword) {
        console.error('Passwords do not match.');
        return;
      }

      // Handle successful registration
      const userData = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        password: form.value.password
      };

      console.log('Registration successful!', userData);
      // You could now call a service to save the userData to the backend
    } else {
      console.warn('Form is invalid.');
    }
  }
}
