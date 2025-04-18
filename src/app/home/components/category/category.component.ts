import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from '../../../modules/category/category.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  standalone: false,
})
export class CategoryComponent implements OnInit, OnDestroy {
  @Input() data: { filters: any } = { filters: {} };

  categories: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService
      .getPaginatedCategories(this.data.filters)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          this.categories = response.data || [];
        },
        error: (err) => {
          console.error('Failed to load categories:', err.message || err);
          this.categories = [];
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
