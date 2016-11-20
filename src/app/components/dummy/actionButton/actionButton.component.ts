import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'action-button',
    styleUrls: ['./actionButton.component.less'],
    template: `
<div (click)="onClick()" class="action-button btn btn-default">
      <span [attr.class]="getIcon()" aria-hidden="true"></span>
</div>
`
})
export class actionButton {
    @Input() icon:string;
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    private getIcon():string {
        return `glyphicon glyphicon-${this.icon}`;
    }

    private onClick():void {
        this.clicked.emit();
    }
}