import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoryService } from '../../modules/category/category.service';
import { Category } from './models/category.model';
import { PaginatedResponse, Meta, Link } from '../../core/models/response';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  standalone: false
})
export class CategoryComponent implements OnInit, OnDestroy {

  public categories: Category[] = [];
  public meta: Meta | null = null;
  public links: Link[] = [];
  private destroy$ = new Subject<void>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories(1); // default first page
  }

  getCategories(page: number): void {
    this.categoryService.getPaginatedCategories(page)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: PaginatedResponse<Category[]>) => {
          this.categories = response.data;
          this.meta = response.meta || null;
          this.links = response.meta?.links ?? [];
        },
        error: (err) => {
          console.error('Category fetch error:', err.message || err);
        }
      });
  }

  onPageChange(page: number): void {
    this.getCategories(page);
  }

  onPageChangeFromUrl(url: string | null): void {
    if (!url) return;
    const pageMatch = url.match(/page=(\d+)/);
    const page = pageMatch ? Number(pageMatch[1]) : 1;
    this.onPageChange(page);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
