import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, CardStatus, cardStatusInfoMap } from '../cards-list.model';

@Component({
  selector: 'lib-cards-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-list-item.component.html',
  styleUrl: './cards-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsListItemComponent {
  @Input() card!: Card;

  public readonly cardStatusInfoMap = cardStatusInfoMap;
  public readonly CardStatus = CardStatus;
}
