import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardType } from '../types/card.type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private cards: CardType[] = [
    {
      title: 'Computer',
      description: 'Lorem Ipsum is simply dummy.',
      urlImage: 'assets/img/card-1.png',
      price: 29,
      livePreview: true,
      bestPrice: true,
    },
    {
      title: 'Building',
      description: 'Lorem Ipsum is simply dummy.',
      urlImage: 'assets/img/card-2.png',
      price: 22,
      livePreview: true,
      bestPrice: true,
    },
    {
      title: 'Balloon',
      description: 'Lorem Ipsum is simply dummy.',
      urlImage: 'assets/img/card-3.png',
      price: 49,
      livePreview: true,
    },
    {
      title: 'Glass over a computer',
      description: 'Lorem Ipsum is simply dummy.',
      urlImage: 'assets/img/card-4.png',
      price: 19,
      livePreview: false,
    },
    {
      title: 'Autumn',
      description: 'Lorem Ipsum is simply dummy.',
      urlImage: 'assets/img/card-5.png',
      price: 33,
      livePreview: true,
    },
    {
      title: 'Balloon',
      description: 'Lorem Ipsum is simply dummy.',
      urlImage: 'assets/img/card-6.png',
      price: 49,
      livePreview: true,
      bestPrice: true,
    },
    {
      title: 'Balloon',
      description: 'Lorem Ipsum is simply dummy.',
      urlImage: 'assets/img/card-7.png',
      price: 49,
      livePreview: true,
      bestPrice: true,
    },
    {
      title: 'Balloon',
      description: 'Lorem Ipsum is simply dummy.',
      urlImage: 'assets/img/card-8.png',
      price: 49,
      livePreview: true,
      bestPrice: true,
    },
  ];

  constructor() {}

  get(): Observable<CardType[]> {
    return new Observable<CardType[]>((obs) => {
      obs.next(this.cards);
    });
  }
}
