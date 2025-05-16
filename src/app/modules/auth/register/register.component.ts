import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone:false,
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm!: FormGroup;
  submitted = false;
  subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      ffirstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.mustMatch('password', 'confirmPassword')
    });
    
  }

  get f() {
    return this.registerForm.controls;
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

    if (this.registerForm.invalid) {
      this.toastr.error('Please fix the errors in the form.');
      return;
    }

    const userData = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    console.log('Registration successful!', userData);
    this.toastr.success('Registration successful!');

    // Example: redirect or send to backend
    // this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}



// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss'],
//   standalone:false,
// })
// export class RegisterComponent implements OnInit {

//   constructor() {}

//   ngOnInit(): void {}

//   onSubmit(form: NgForm): void {
//     if (form.valid) {
//       if (form.value.password !== form.value.confirmPassword) {
//         console.error('Passwords do not match.');
//         return;
//       }

//       // Handle successful registration
//       const userData = {
//         firstName: form.value.firstName,
//         lastName: form.value.lastName,
//         email: form.value.email,
//         password: form.value.password
//       };

//       console.log('Registration successful!', userData);
//       // You could now call a service to save the userData to the backend
//     } else {
//       console.warn('Form is invalid.');
//     }
//   }
// }


// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { RegistrationService } from '../services/registration.service';
// // import { passwordMatcher } from './password-matcher.validator';
 
// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.scss'],
// })
// export class RegistrationComponent implements OnInit, OnDestroy {
 
//   subscribe: Subscription = new Subscription();
 
//   show = false;
//   public submitted = false;
//   passwordShow: boolean = false;
//   show1: boolean = false;
//   rePasswordShow: boolean = false;
//   emailButtonEnabled = false;
//   resetPwdField = false;
//   emailOtpField = false;
//   emailVerfiy: boolean = false
//   registrationForm!: FormGroup;
//   errors = '';
//   userExistError: string | null = null;
//   otpError: boolean = false;
//   request_id: string = '';
//   user_id: number = 0;
//   otp: number = 0;
//   type: string = '';
//   mobilePattern = /^[0-9]{10}$/;
//   emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   usernamePattern = /^[a-zA-Z0-9]{6,16}$/;
//   timer: number = 30; // Initial countdown value
//   isTimerActive: boolean = true;
//   passwordErrors: string = '';
//   showOtpSuccessMessage: boolean = false;
//   showSubmitMessage: string = '';
 
 
//   constructor(
//     private fb: FormBuilder,
//     private route: Router,
//     private regService: RegistrationService,
//     public _toastrService: ToastrService,
//   ) { }
 
//   ngOnInit(): void {
//     this.registrationForm = this.fb.group({
//       mobile:
//         [null, [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
 
//       emailOtp: [null,
//         [
//           Validators.required,
//           Validators.minLength(6),
//           Validators.maxLength(6),
//           Validators.pattern('^[0-9]+$'),
//         ],
//       ],
//       mail:
//         [null, [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
//       password: [null, [
//         Validators.required,
//         Validators.minLength(8),
//         Validators.pattern(
//           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
//         )
//       ]],
//       confirmPassword: ["", Validators.required,],
//     },
//       {
//         validators: this.mustMatch("password", "confirmPassword")
//       }
//     )
//     console.log();
//   }
 
//   get f() {
//     return this.registrationForm.controls;
//   }
 
//   mustMatch(controlName: string, matchingControlName: string) {
//     return (formGroup: FormGroup) => {
//       const control = formGroup.controls[controlName];
//       const matchingControl = formGroup.controls[matchingControlName];
//       if (matchingControl.errors && !matchingControl.errors?.["MustMatch"]) {
//         return;
//       }
//       if (control.value !== matchingControl.value) {
//         matchingControl.setErrors({ MustMatch: true });
//       } else {
//         matchingControl.setErrors(null);
//       }
//     };
//   }
 
//   validateMobile() {
 
//     let email = this.registrationForm.get('mobile');
//     if (email?.errors == null) {
//       console.log(email?.value);
//       this.emailButtonEnabled = true;
//     } else {
//       this.emailButtonEnabled = false;
//     }
//   }
 
//   validateEmail() {
 
//     let email = this.registrationForm.get('mail');
//     if (email?.errors == null) {
//       console.log(email?.value);
//       this.emailButtonEnabled = true;
//     } else {
//       this.emailButtonEnabled = false;
//     }
//   }
 
 
//   showPassword() {
//     this.passwordShow = !this.passwordShow
//   }
//   showrePassword() {
//     this.show1 = !this.show1;
//   }
 
 
 
 
//   sendEmailOtp() {
//     this.startTimer();
//     let mobile = this.registrationForm.get('mobile');
//     if (mobile?.errors == null) {
//       // console.log(email?.value);
 
//       const data = {
//         mobile: mobile?.value,
//       }
 
//       this.showOtpSuccessMessage = true;
 
//       // Hide the message after 3 seconds
//       setTimeout(() => {
//         this.showOtpSuccessMessage = false;
//       }, 3000);
 
 
//       const sendMobileOtp = this.regService.requestOtp(data).subscribe((res: any) => {
//         console.log(res);
//         if (res.status == true) {
//           this.emailOtpField = true;
//           this.request_id = res.data?.request_id;
//           this._toastrService.success('Otp send successfully');
//           this.otp = res.data?.otp;
//           console.log(this.otp);
//           return res.data.otp;
//         }
//         else {
//           this._toastrService.error(res.error);
//         }
//       });
//       this.subscribe.add(sendMobileOtp);
 
//     }
//   }
 
//   startTimer() {
//     const interval = setInterval(() => {
//       if (this.timer > 0) {
//         this.timer--;
//       } else {
//         this.isTimerActive = false;
//         clearInterval(interval);
//       }
//     }, 2000); // Decrease timer every 1 second
//   }
 
//   resendOtp() {
//     if (!this.isTimerActive) {
//       this.sendEmailOtp()
//       this.timer = 30; // Reset the timer
//       this.isTimerActive = true;
//       this.startTimer();
//     }
//   }
 
//   verfiyEmailOtp() {
//     let verifyOtp = this.registrationForm.get('emailOtp');
//     // console.log(this.otp);
//     if (verifyOtp?.errors == null) {
//       console.log(verifyOtp?.value, this.request_id);
//       const data = {
//         otp: verifyOtp?.value,
//         request_id: this.request_id,
//         type: this.type,
//       }
//       console.log(data);
//       const otpVerify = this.regService.verifyToken(data).subscribe((res: any) => {
//         console.log(res);
//         if (res.status === true) {
//           this._toastrService.success('OTP verified successfully');
//           this.resetPwdField = true;
//         } else {
//           this._toastrService.error(res.message);
//           this.emailOtpField = false;
//           this.otpError = true;
//           if (res.data.status == false) {
//             this.timer = 60 * 30;
//           }
//         }
//       });
//       this.subscribe.add(otpVerify);
//     } else {
//       this.resetPwdField = false;
 
//     }
 
//   }
 
//   onSubmit() {
 
//     this.submitted = true;
 
//     if (this.registrationForm.status !== 'INVALID') {
//       const data = {
//         mobile: this.registrationForm.value.mobile,
//         email: this.registrationForm.value.email,
//         password: this.registrationForm.value.password,
//         confirm_password: this.registrationForm.value.confirmPassword
//       };
 
//       const createUser = this.regService.create(data).subscribe((res: any) => {
//         console.log(res.status);
//         this._toastrService.clear();
//         if (res.status === true) {
//           console.log(res.status);
 
//           // this.route.navigateByUrl('/auth/login');
//           this.showSubmitMessage = res.message;
//           this._toastrService.success('Account created successfully');
//           this.route.navigateByUrl('/');  
 
//         } else {
 
//           this._toastrService.error(res.errors);
//         }
//       });
 
//       this.subscribe.add(createUser);
 
//     } else {
//       this._toastrService.error('Please check inputs');
//     }
//   }
 
//   ngOnDestroy(): void {
//     this.subscribe.unsubscribe()
//   }
// }
 
 



// <ion-content>
// <div class="container">
// <h2>Become User</h2>
// <p>If you are new to our store, we are glad to have you as a member.</p>
 
//     <form #registerForm="ngForm" (ngSubmit)="onSubmit(registerForm)">
// <!-- First Name -->
// <div class="form-group">
// <label for="first-name">First Name *</label>
// <input type="text" id="first-name" name="firstName" placeholder="First Name" ngModel required #firstName="ngModel">
//         @if (firstName.invalid && (firstName.dirty || firstName.touched)) {
// <div class="error">First Name is required.</div>
//         }
// </div>
 
//       <!-- Last Name -->
// <div class="form-group">
// <label for="last-name">Last Name *</label>
// <input type="text" id="last-name" name="lastName" placeholder="Last Name" ngModel required #lastName="ngModel">
//         @if (lastName.invalid && (lastName.dirty || lastName.touched)) {
// <div class="error">Last Name is required.</div>
//         }
// </div>
 
//       <!-- Email -->
// <div class="form-group">
// <label for="email">Email *</label>
// <input type="email" id="email" name="email" placeholder="email@example.com" ngModel required email #email="ngModel">
//         @if (email.errors && (email.dirty || email.touched)) {
//           @if (email.errors['required']) {
// <div class="error">Email is required.</div>
//           }
//           @if (email.errors['email']) {
// <div class="error">Enter a valid email.</div>
//           }
//         }
// </div>
 
//       <!-- Password -->
// <div class="form-group">
// <label for="password">Password *</label>
// <input type="password" id="password" name="password" placeholder="Password" ngModel required minlength="6" #password="ngModel">
//         @if (password.errors && (password.dirty || password.touched)) {
//           @if (password.errors['required']) {
// <div class="error">Password is required.</div>
//           }
//           @if (password.errors['minlength']) {
// <div class="error">Password must be at least 6 characters.</div>
//           }
//         }
// </div>
 
//       <!-- Confirm Password -->
// <div class="form-group">
// <label for="confirm-password">Confirm Password *</label>
// <input type="password" id="confirm-password" name="confirmPassword" placeholder="Confirm Password" ngModel required #confirmPassword="ngModel">
//         @if (confirmPassword.errors && (confirmPassword.dirty || confirmPassword.touched)) {
//           @if (confirmPassword.errors['required']) {
// <div class="error">Confirm Password is required.</div>
//           }
//         }
//         @if (password.value && confirmPassword.value && password.value !== confirmPassword.value && (confirmPassword.dirty || confirmPassword.touched)) {
// <div class="error">Passwords do not match.</div>
//         }
// </div>
 
//       <button type="submit" class="btn-primary" [disabled]="registerForm.invalid">Register</button>
// </form>
 
//     <p class="sign-in-link">
//       Already have an account? <a href="/login">Sign In</a>
// </p>
// </div>
// </ion-content>


// <div class="page-wrapper">
//   <div class="container-fluid">
//     <div class="row">
//       <div class="card border border-white">
//         <div class="row img-top">
//           <div class="col-4"></div>
//           <div class="col-4">
//             <div class="center-image">
//               <a href="">
//                 <img class="img-fluid img-50 text-center" src="./../../../assets/img/igeet_logo.png" alt="logo" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div class="mx-2 px-2">
//           <form [formGroup]="registrationForm">
//             <h4>Create New Account</h4>
//             <p class="mb-0 f-light ">Enter your personal details to create an account
//             </p>
//             <div *ngIf="!resetPwdField">
//               <div class="form-group">
//                 <label class="col-form-label f-14">Mobile Number<span class="text-danger">*</span></label>
//                 <div class="input-group mb-0">
//                     <span class="input-group-text bg-white">+91</span>
//                   <input type="text" class="form-control" placeholder="Please enter your Mobile number " formControlName="mobile" (keyup)="validateMobile()">
//                 </div>
//                 <!-- <ion-input label="+91" class="form-control" required="" placeholder="Please enter Your Mobile number"
//                   formControlName="mobile" (keyup)="validateMobile()"></ion-input> -->
//                 <p *ngIf="registrationForm.get('mobile')?.touched && registrationForm.get('mobile')?.errors?.['required']"
//                   class="text-danger">
//                   Mobile number is required.
//                 </p>
//                 <p *ngIf="registrationForm.get('mobile')?.touched && registrationForm.get('mobile')?.errors?.['email']"
//                   class="text-danger">
//                   Please enter a valid mobile number.
//                 </p>
//                 <!-- <p *ngIf="showOtpSuccessMessage" class="my-0 success-message">Otp send successfully.</p> -->
//                 <button *ngIf="!emailOtpField && !resetPwdField" class="btn bg-primary f-white w-100 mt-2" type="button"
//                   (click)="sendEmailOtp()" [disabled]="!emailButtonEnabled"><b class="fw-normal">Send
//                     OTP</b></button>
                
//               </div>
//               @if(emailOtpField) {
//               <div class="form-group">
//                 <label class="col-form-label pt-0">Enter OTP <span class="text-danger">*</span></label>
 
//                 <input class="form-control " maxlength="6" placeholder="Enter 6 Digit OTP" formControlName="emailOtp"
//                   required onlyNumbers>
//                 <p *ngIf="registrationForm.get('emailOtp')?.touched && registrationForm.get('emailOtp')?.errors?.['required']"
//                   class="text-danger mb-0">
//                   Please enter OTP
//                 </p>
 
//                 <p *ngIf="registrationForm.get('emailOtp')?.touched && registrationForm.get('emailOtp')?.errors?.['pattern']"
//                   class="text-danger mb-0">
//                   Invalid OTP
//                 </p>
 
//                 <p *ngIf="registrationForm.get('emailOtp')?.touched && registrationForm.get('emailOtp')?.errors?.['maxlength']"
//                   class="text-danger mb-0">
//                   Please enter 6 digit OTP
//                 </p>
//                 <p class="mb-0 text-end">
//                   <!-- If Don't Receive OTP? -->
//                   <!-- <a class="ms-2 text-danger text-end" href="/auth/forgotpassword">Resend OTP</a><span class="'ms-2">in
//                   00:08</span> -->
//                   <a class="ms-2" [ngClass]="{ 'f-primary': !isTimerActive, 'f-light': isTimerActive }"
//                     [style.pointerEvents]="isTimerActive ? 'none' : 'auto'" (click)="resendOtp()"
//                     class="text-decoration-none">
//                     Resend OTP
//                   </a>
//                   <span class="ms-2">
//                     in {{ timer < 10 ? '0' + timer : timer }} </span>
//                 </p>
//                 <button class="btn bg-primary f-white w-100 mt-3" (click)="verfiyEmailOtp() "><b
//                     class="fw-normal">Verify OTP</b></button>
 
//               </div>
//               }
//             </div>
//             @if(resetPwdField) {
//             <label class="col-form-label f-14">Email</label>
//             <input class="form-control" required="" placeholder="Please Enter Your Email" formControlName="mail"
//               (keyup)="validateEmail()">
//             <div class="form-group mb-0">
//               <div class="form-group mb-2">
//                 <label class="col-form-label">Password <span class="text-danger">*</span></label>
//                 <div class="input-group">
//                   <input class="form-control" [type]="passwordShow ? 'text' : 'password'" required=""
//                     formControlName="password" placeholder="*********" placement="top" ngbPopover="
//                      " popoverTitle="Password Must be min 8 characters. 1 Lowercase,
//                      1 Uppercase,
//                      1 Numeric,
//                      1 Special Char">
//                   <span class="input-group-text" (click)="showPassword() ">
//                     @if(!passwordShow) {
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
//                       <path fill="currentColor"
//                         d="M25.19 20.4a6.8 6.8 0 0 0 .43-2.4a6.86 6.86 0 0 0-6.86-6.86a6.8 6.8 0 0 0-2.37.43L18 13.23a5 5 0 0 1 .74-.06A4.87 4.87 0 0 1 23.62 18a5 5 0 0 1-.06.74Z"
//                         class="clr-i-outline clr-i-outline-path-1" />
//                       <path fill="currentColor"
//                         d="M34.29 17.53c-3.37-6.23-9.28-10-15.82-10a16.8 16.8 0 0 0-5.24.85L14.84 10a14.8 14.8 0 0 1 3.63-.47c5.63 0 10.75 3.14 13.8 8.43a17.8 17.8 0 0 1-4.37 5.1l1.42 1.42a19.9 19.9 0 0 0 5-6l.26-.48Z"
//                         class="clr-i-outline clr-i-outline-path-2" />
//                       <path fill="currentColor"
//                         d="m4.87 5.78l4.46 4.46a19.5 19.5 0 0 0-6.69 7.29l-.26.47l.26.48c3.37 6.23 9.28 10 15.82 10a16.9 16.9 0 0 0 7.37-1.69l5 5l1.75-1.5l-26-26Zm9.75 9.75l6.65 6.65a4.8 4.8 0 0 1-2.5.72A4.87 4.87 0 0 1 13.9 18a4.8 4.8 0 0 1 .72-2.47m-1.45-1.45a6.85 6.85 0 0 0 9.55 9.55l1.6 1.6a14.9 14.9 0 0 1-5.86 1.2c-5.63 0-10.75-3.14-13.8-8.43a17.3 17.3 0 0 1 6.12-6.3Z"
//                         class="clr-i-outline clr-i-outline-path-3" />
//                       <path fill="none" d="M0 0h36v36H0z" />
//                     </svg>
//                     }
//                     @else if(passwordShow) {
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
//                       <path fill="currentColor"
//                         d="M33.62 17.53c-3.37-6.23-9.28-10-15.82-10S5.34 11.3 2 17.53l-.28.47l.26.48c3.37 6.23 9.28 10 15.82 10s12.46-3.72 15.82-10l.26-.48Zm-15.82 8.9C12.17 26.43 7 23.29 4 18c3-5.29 8.17-8.43 13.8-8.43S28.54 12.72 31.59 18c-3.05 5.29-8.17 8.43-13.79 8.43"
//                         class="clr-i-outline clr-i-outline-path-1" />
//                       <path fill="currentColor"
//                         d="M18.09 11.17A6.86 6.86 0 1 0 25 18a6.86 6.86 0 0 0-6.91-6.83m0 11.72A4.86 4.86 0 1 1 23 18a4.87 4.87 0 0 1-4.91 4.89"
//                         class="clr-i-outline clr-i-outline-path-2" />
//                       <path fill="none" d="M0 0h36v36H0z" />
//                     </svg>
//                     }
 
//                   </span>
//                 </div>
//               </div>
//               <p *ngIf="registrationForm.get('password')?.touched && registrationForm.get('password')?.errors?.['required']"
//                 class="text-danger mb-0">
//                 Please enter password
//               </p>
//               <p *ngIf="registrationForm.get('password')?.errors?.['pattern']" class="text-danger mb-0">
//                 Password must contain min 8 digits at least one lowercase, one uppercase, one numeric, and one special character
//               </p>
//             </div>
 
//             <div class="form-group mb-3">
//               <label>Re-Password</label>
//               <div class="input-group">
//                 <input class="form-control" [type]="show1 ? 'text' : 'password'" placeholder="*********"
//                   formControlName="confirmPassword">
//                 <span class="input-group-text" (click)="showrePassword() ">
//                   @if(!show1) {
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
//                     <path fill="currentColor"
//                       d="M25.19 20.4a6.8 6.8 0 0 0 .43-2.4a6.86 6.86 0 0 0-6.86-6.86a6.8 6.8 0 0 0-2.37.43L18 13.23a5 5 0 0 1 .74-.06A4.87 4.87 0 0 1 23.62 18a5 5 0 0 1-.06.74Z"
//                       class="clr-i-outline clr-i-outline-path-1" />
//                     <path fill="currentColor"
//                       d="M34.29 17.53c-3.37-6.23-9.28-10-15.82-10a16.8 16.8 0 0 0-5.24.85L14.84 10a14.8 14.8 0 0 1 3.63-.47c5.63 0 10.75 3.14 13.8 8.43a17.8 17.8 0 0 1-4.37 5.1l1.42 1.42a19.9 19.9 0 0 0 5-6l.26-.48Z"
//                       class="clr-i-outline clr-i-outline-path-2" />
//                     <path fill="currentColor"
//                       d="m4.87 5.78l4.46 4.46a19.5 19.5 0 0 0-6.69 7.29l-.26.47l.26.48c3.37 6.23 9.28 10 15.82 10a16.9 16.9 0 0 0 7.37-1.69l5 5l1.75-1.5l-26-26Zm9.75 9.75l6.65 6.65a4.8 4.8 0 0 1-2.5.72A4.87 4.87 0 0 1 13.9 18a4.8 4.8 0 0 1 .72-2.47m-1.45-1.45a6.85 6.85 0 0 0 9.55 9.55l1.6 1.6a14.9 14.9 0 0 1-5.86 1.2c-5.63 0-10.75-3.14-13.8-8.43a17.3 17.3 0 0 1 6.12-6.3Z"
//                       class="clr-i-outline clr-i-outline-path-3" />
//                     <path fill="none" d="M0 0h36v36H0z" />
//                   </svg>
//                   }
//                   @else if(show1) {
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
//                     <path fill="currentColor"
//                       d="M33.62 17.53c-3.37-6.23-9.28-10-15.82-10S5.34 11.3 2 17.53l-.28.47l.26.48c3.37 6.23 9.28 10 15.82 10s12.46-3.72 15.82-10l.26-.48Zm-15.82 8.9C12.17 26.43 7 23.29 4 18c3-5.29 8.17-8.43 13.8-8.43S28.54 12.72 31.59 18c-3.05 5.29-8.17 8.43-13.79 8.43"
//                       class="clr-i-outline clr-i-outline-path-1" />
//                     <path fill="currentColor"
//                       d="M18.09 11.17A6.86 6.86 0 1 0 25 18a6.86 6.86 0 0 0-6.91-6.83m0 11.72A4.86 4.86 0 1 1 23 18a4.87 4.87 0 0 1-4.91 4.89"
//                       class="clr-i-outline clr-i-outline-path-2" />
//                     <path fill="none" d="M0 0h36v36H0z" />
//                   </svg>
//                   }
 
//                 </span>
//               </div>
//               <p *ngIf="registrationForm.get('confirmPassword')?.touched && registrationForm.get('confirmPassword')?.errors?.['required']"
//                 class="text-danger mb-0">
//                 Please enter re-password
//               </p>
//               <p *ngIf="registrationForm.get('confirmPassword')?.touched && registrationForm.get('confirmPassword')?.errors?.['MustMatch']"
//                 class="text-danger mb-0">
//                 Password must be match
//               </p>
//             </div>
 
//             <div class="form-group ">
//               <button class="btn bg-primary f-white w-100 " type="submit" (click)="onSubmit()"><b
//                   class="fw-normal">Submit</b></button>
//             </div>
//             }
//             <p class="mt-2 mb-0 f-light">Already Have An Account?<a class="ms-2" href="">Login</a></p>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

