import {Component} from '@angular/core';

@Component({
    selector: 'control-buttons',
    styleUrls: ['./controllButtons.less'],
    template: `
<div class="controll-buttons">
  <action-button *ngFor="let icon of icons" [icon]="icon" (clicked)="$event"></action-button>
</div>
`
})
export class controlButtons {
    private icons: any = [
        'favourite',
        'spotify',
        'download',
        'fire'
    ];

    constructor() {
    }
}