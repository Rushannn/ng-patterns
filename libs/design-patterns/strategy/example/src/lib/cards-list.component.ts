import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cards } from './cards-list.model';
import { CardsListItemComponent } from './cards-list-item/cards-list-item.component';

@Component({
  selector: 'lib-cards-list',
  standalone: true,
  imports: [
    CommonModule,
    CardsListItemComponent
  ],
  template: `
  <div class="cards-list-wrapper">
    @for (card of cards; track $index) {
      <lib-cards-list-item [card]="card"></lib-cards-list-item>
    }

  </div>
  `,
  styleUrl: './cards-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsListComponent {
  public readonly cards = cards;
}
