import { Component, Input } from '@angular/core';
import { CardType } from 'src/app/types/card.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ required: true }) card!: CardType;
}
