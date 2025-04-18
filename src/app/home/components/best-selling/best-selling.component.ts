import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../../modules/product/product.service';
import { Product } from '../../../modules/product/product.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.scss'],
  standalone: false
})
export class BestSellingComponent implements OnInit, OnDestroy {
  @Input() data: { filters: any; title?: string } = { filters: {}, title: '' };

  products: Product[] = [];
  private destroy$ = new Subject<void>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService
      .getProductsByFilters(this.data.filters)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.products = res || [];
        },
        error: (err) => {
          console.error('Best Selling products fetch failed:', err.message || err);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
