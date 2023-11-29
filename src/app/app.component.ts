import { Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { CardType } from './types/card.type';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly title = 'swiper-example';

  cards$!: Observable<CardType[]>;

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  constructor(private readonly apiService: ApiService) {
    this.cards$ = this.apiService.get().pipe();
  }

  readonly swiperConfig: SwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: {
      enabled: true,
      sticky: true,
      momentumBounce: false,
      minimumVelocity: 0.5,
    },
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };


}
