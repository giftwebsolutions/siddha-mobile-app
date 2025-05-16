import { Component } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
  standalone: false,
})
export class MyprofileComponent {

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
    dob: '',
    gender: ''
  };

  constructor() {
    // You can initialize your profile here or fetch it from API
  }

  // Define this method to handle form submission
  updateProfile(form: any) {
    if (form.valid) {
      console.log('Form Data:', this.profile);
      // TODO: Add your profile update logic here, e.g. call a service to save data
      alert('Profile updated successfully!');
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
