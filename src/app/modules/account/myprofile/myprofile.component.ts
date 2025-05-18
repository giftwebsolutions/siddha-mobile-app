import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
  standalone: false,
})
export class MyprofileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      current_password: [''],
      new_password: [''],
      new_password_confirmation: [''],
      subscribed_to_news_letter: [false],
      image: [null],
    });

    this.loadProfile();
  }

  loadProfile(): void {
    this.accountService.getProfile().subscribe({
      next: res => {
        const data = res.data;
        this.profileForm.patchValue({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          gender: data.gender,
          date_of_birth: data.date_of_birth,
          subscribed_to_news_letter: false,
        });
      },
      error: err => {
        this.toastr.error(err?.message || 'Failed to load profile');
      }
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.profileForm.patchValue({ image: file });
    }
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.toastr.error('Please fix the form errors.');
      return;
    }

    const formData = this.profileForm.getRawValue();
    this.accountService.updateProfile({
      _method: 'PUT',
      ...formData
    }).subscribe({
      next: () => this.toastr.success('Profile updated successfully!'),
      error: err => this.toastr.error(err?.message || 'Profile update failed')
    });
  }

  hasError(controlName: string): boolean {
    const ctrl = this.profileForm.get(controlName);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}