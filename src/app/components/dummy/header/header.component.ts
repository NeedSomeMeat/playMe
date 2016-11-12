import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'header',
    styleUrls: ['./header.component.css'],
    template: `
<div class="header-block">
    <h1>{{title}}</h1>
    <div class="header-button">
        <button *ngIf="button" type="button" class="btn btn-primary" (click)="onBtnClick()">
            {{button}}
        </button>
    </div>
</div>
  `
})
export class Header {
    @Input() title:string;
    @Input() button:string;
    @Output() btnClicked:EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    private onBtnClick():void {
        this.btnClicked.emit();
    }
}