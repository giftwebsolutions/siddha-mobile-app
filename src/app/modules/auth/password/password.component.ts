import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  standalone:false,
})
export class PasswordComponent implements OnInit {
  passwordForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.passwordForm.invalid) {
      return;
    }

    if (this.passwordForm.value.password !== this.passwordForm.value.confirmPassword) {
      return;
    }

    // Submit logic here
    console.log('Password reset submitted:', this.passwordForm.value);
  }
}
