import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

interface Product {
  name: string;
  price: number;
  quantity: number;
  originalPrice: number;
  discount: number;
  image: string;
  size: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  'standalone': false,
})
export class CartComponent implements OnInit {

  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1488229297570-58520851e868',
  ];

  products: Product[] = [
    { name: 'Product 1', price: 50, quantity: 2, originalPrice: 60, discount: 10, image: 'assets/product1.jpg', size: 'M' },
    { name: 'Product 2', price: 30, quantity: 1, originalPrice: 40, discount: 20, image: 'assets/product2.jpg', size: 'L' },
  ];

  totalPrice: number = 0;

  constructor() {
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  }

  increaseQuantity(product: Product): void {
    if (product.quantity < 10) {  // Optional max limit
      product.quantity++;
      this.calculateTotalPrice();
    }
  }

  decreaseQuantity(product: Product): void {
    if (product.quantity > 1) {
      product.quantity--;
      this.calculateTotalPrice();
    }
  }

  ngOnInit(): void {}

  swiperSlideChanged(e: any): void {
    console.log('changed: ', e);
  }

  swiperReady(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext(): void {
    this.swiper?.slideNext();
  }

  goPrev(): void {
    this.swiper?.slidePrev();
  }
}
