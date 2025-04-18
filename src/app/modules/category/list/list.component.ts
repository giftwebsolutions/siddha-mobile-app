import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../../product/product.service';
import { ProductResponse, Product } from '../../product/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: false
})
export class ListComponent implements OnInit, OnDestroy {

  public products: Product[] = [];
  public currentPage = 1;
  public hasMore = true;
  private destroy$ = new Subject<void>();
  public categoryId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.loadProducts();
  }

  loadProducts(): void {
    if (!this.hasMore) return;
    if (this.categoryId == null) return;
    this.productService.getProductListByCategoryId(this.categoryId, this.currentPage)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: ProductResponse) => {
          const productsWithQty = response.data.map(p => ({
            ...p,
            quantity: 1, // initialize default quantity
          }));
          this.products.push(...productsWithQty);
          this.currentPage++;
          this.hasMore = !!response.links?.next;
        }
      });
  }

  increaseQty(index: number): void {
    if (this.products[index].quantity < 10) {
      this.products[index].quantity += 1;
    }
  }

  decreaseQty(index: number): void {
    if (this.products[index].quantity > 1) {
      this.products[index].quantity -= 1;
    }
  }

  addToCart(product: Product): void {
    console.log('Add to cart:', {
      id: product.id,
      quantity: product.quantity
    });
    // Integrate with your cartService here
  }

  viewProduct(productId: number): void {
    // Navigate without nested [routerLink] issues
    window.location.href = `/product/${productId}`;
  }
  loadMore(event: any): void {
    this.loadProducts();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
