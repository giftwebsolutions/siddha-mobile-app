import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  standalone: false,
})
export class EditComponent {
  profile = {
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    gstNo: '',
    streetAddress: '',
    country: '',
    state: '',
    city: '',
    postCode: '',
    phone: '',
    isDefault: false,
  };

  constructor(private toastr: ToastrService) {}

  updateProfile(form: NgForm) {
    if (form.invalid) {
      this.toastr.error('Please fill in all required fields correctly.', 'Form Invalid');
      return;
    }

    
    console.log('Form Data:', this.profile);
    this.toastr.success('Profile updated successfully!', 'Success');
  }
}
