import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';
import { Address } from '../models/address';
@Component({
  selector: 'app-myaddress',
  templateUrl: './myaddress.component.html',
  styleUrls: ['./myaddress.component.scss'],
  standalone: false
})
export class MyaddressComponent implements OnInit {
  addresses: Address[] = [];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.loadAddresses();
  }

  loadAddresses(): void {
    this.addressService.getAddresses().subscribe({
      next: res => this.addresses = res.data,
      error: err => console.error('Failed to load addresses', err)
    });
  }
}