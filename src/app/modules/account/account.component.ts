import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: false
})
export class AccountComponent implements OnInit {
  user: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getProfile().subscribe({
      next: res => this.user = res.data,
      error: err => console.error('Failed to load profile', err)
    });
  }
}
