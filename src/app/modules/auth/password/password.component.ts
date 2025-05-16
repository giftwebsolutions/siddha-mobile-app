import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  standalone: false,
})
export class PasswordComponent implements OnInit, OnDestroy {

  passwordForm!: FormGroup;
  submitted = false;
  subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/)
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.mustMatch('password', 'confirmPassword')
    });
  }

  get f() {
    return this.passwordForm.controls;
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.passwordForm.invalid) {
      this.toastr.error('Please correct the errors in the form.');
      return;
    }

    const data = {
      password: this.passwordForm.value.password
    };

    console.log('Password reset submitted:', data);
    this.toastr.success('Password has been reset successfully.');

    // Optional: redirect
    // this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-password',
//   templateUrl: './password.component.html',
//   styleUrls: ['./password.component.scss'],
//   standalone:false,
// })
// export class PasswordComponent implements OnInit {
//   passwordForm!: FormGroup;
//   submitted = false;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.passwordForm = this.fb.group({
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     this.submitted = true;

//     if (this.passwordForm.invalid) {
//       return;
//     }

//     if (this.passwordForm.value.password !== this.passwordForm.value.confirmPassword) {
//       return;
//     }

//     // Submit logic here
//     console.log('Password reset submitted:', this.passwordForm.value);
//   }
// }
