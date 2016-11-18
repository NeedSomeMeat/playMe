import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'action-button',
    styleUrls: ['./actionButton.component.less'],
    template: `
<div (click)="onClick()">
      <span class="play glyphicon glyphicon-play" aria-hidden="true"></span>
</div>
  `
})
export class actionButton {
    @Input() icon:string;
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    private onClick():void {
        this.clicked.emit();
    }
}