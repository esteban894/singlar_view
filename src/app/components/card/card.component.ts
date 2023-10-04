import { Component, Input } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() company!: Company;
}
