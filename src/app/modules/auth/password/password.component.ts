import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
   standalone: false,
})
export class PasswordComponent {
  passwordForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.passwordForm = this.fb.group(
      {
        newPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: this.matchPasswords('newPassword', 'confirmPassword')
      }
    );
  }

  // Custom validator to check if passwords match
  matchPasswords(passwordKey: string, confirmKey: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(passwordKey)?.value;
      const confirm = formGroup.get(confirmKey)?.value;

      if (password !== confirm) {
        formGroup.get(confirmKey)?.setErrors({ mismatch: true });
        return { mismatch: true };
      } else {
        const confirmControl = formGroup.get(confirmKey);
        if (confirmControl?.hasError('mismatch')) {
          confirmControl.setErrors(null); // clear mismatch if corrected
        }
        return null;
      }
    };
  }

  // Getter for easy access in template
  get f() {
    return this.passwordForm.controls;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }

    const newPassword = this.passwordForm.value.newPassword;
    console.log('Password successfully changed:', newPassword);

    // Call service to update password or route to login etc.
  }
}
