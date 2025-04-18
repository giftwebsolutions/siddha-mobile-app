import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HomeService } from './home.service';
import { PaginatedResponse } from '../core/models/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements OnInit, OnDestroy {



  private destroy$ = new Subject<void>();
  public data: any = [];


  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getHomePage()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: []) => {
          this.data = data;
        },
        error: (err) => {
          console.error('Home fetch error:', err.message || err);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
