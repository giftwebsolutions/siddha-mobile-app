import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'Siddha Medicals';
  @Input() showBackButton: boolean = false;
  @Input() showSearch: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() { }

  get isHomePage(): boolean {
    const url = this.router.url;
    return url === '/' || url === '/home';
  }
}