import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../../services/address.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-address',
  templateUrl: './add-edit-address.component.html',
  styleUrls: ['./add-edit-address.component.scss'],
  standalone: false
})
export class AddEditAddressComponent implements OnInit {
  addressForm!: FormGroup;
  addressId: number | null = null;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private addressService: AddressService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.addressId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEditMode = !!this.addressId;

    this.addressForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      company_name: [''],
      address: ['', Validators.required],
      country: ['IN', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      postcode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      is_default: [false],
      vat_id: ['INV01234567891']
    });

    if (this.isEditMode) {
      this.loadAddress();
    }

    this.addressForm.valueChanges.subscribe(() => {
      Object.keys(this.addressForm.controls).forEach(key => {
        this.addressForm.get(key)?.markAsTouched();
      });
    });
  }

  loadAddress(): void {
    if (!this.addressId) return;

    this.addressService.getAddress(this.addressId).subscribe({
      next: res => {
        const data = res.data;
        this.addressForm.patchValue({
          ...data,
          address: data.address[0] || ''
        });
      },
      error: err => {
        this.toastr.error('Failed to load address');
        this.router.navigate(['/account/myaddress']);
      }
    });
  }

  onSubmit(): void {
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched();
      return;
    }

    const payload = {
      ...this.addressForm.value,
      address: [this.addressForm.value.address]
    };

    const request = this.isEditMode
      ? this.addressService.updateAddress(this.addressId!, payload)
      : this.addressService.createAddress(payload);

    request.subscribe({
      next: () => {
        this.toastr.success(`Address ${this.isEditMode ? 'updated' : 'added'} successfully.`);
        this.router.navigate(['/account/myaddress']);
      },
      error: err => this.toastr.error('Something went wrong.')
    });

  }

  hasError(controlName: string): boolean {
    const control = this.addressForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}