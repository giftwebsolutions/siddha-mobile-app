import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  get isHomePage(): boolean {
    const url = this.router.url;
    return url === '/' || url === '/home'; // adapt as per your home route
  }

}
