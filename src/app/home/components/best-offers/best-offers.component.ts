import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../../modules/product/product.service';
import { Product } from '../../../modules/product/product.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-best-offers',
  templateUrl: './best-offers.component.html',
  styleUrls: ['./best-offers.component.scss'],
  standalone: false
})
export class BestOffersComponent implements OnInit, OnDestroy {
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
          console.error('Offer products fetch failed:', err.message || err);
        }
      });
  }

  getChunkedProducts(products: any[], size: number): any[][] {
    const chunks: any[][] = [];
    for (let i = 0; i < products.length; i += size) {
      chunks.push(products.slice(i, i + size));
    }
    return chunks;
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
