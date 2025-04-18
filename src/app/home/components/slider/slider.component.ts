import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: false,
})
export class SliderComponent implements OnInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  @Input() data: { images: { image: string; title?: string }[] } = { images: [] };

  siteUrl = environment.siteUrl;

  constructor() { }

  ngOnInit() { }

  getImageUrl(image: string): string {
    return `${this.siteUrl}/${image}`;
  }

  swiperSlideChanged(e: any) {
    console.log('Slide changed: ', e);
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext() {
    this.swiper?.slideNext();
  }

  goPrev() {
    this.swiper?.slidePrev();
  }
}

