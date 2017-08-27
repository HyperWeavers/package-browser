import { Component, Input } from '@angular/core';

import { Package }          from './package';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})

export class CardComponent {
  @Input() package: Package;
}