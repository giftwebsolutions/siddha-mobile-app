import { PaginatedResponse, Meta, Link } from '../../../core/models/response';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: false
})
export class ListComponent implements OnInit {

  public products: any = [];
  public meta: Meta | null = null;
  public links: Link[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() { 
    this.getProducts(1)
  }

  getProducts(page: number): void {
    this.productService.getProductList(page)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: PaginatedResponse<[]>) => {
          console.log(response);
          this.products = response.data;
          this.meta = response.meta || null;
          this.links = response.meta?.links ?? [];
        },
        error: (err) => {
          console.error('Category fetch error:', err.message || err);
        }
      });
  }

  onPageChange(page: number): void {
    this.getProducts(page);
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
