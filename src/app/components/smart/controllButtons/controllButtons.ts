import {Component} from '@angular/core';

@Component({
    selector: 'control-buttons',
    template: `
  <action-button (clicked)="$event"></action-button>
  `
})
export class controlButtons {
    constructor() {
    }
}