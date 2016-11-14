import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'header',
    styleUrls: ['./header.component.less'],
    template: `
<div class="header-block">
    <div class="header-button back">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    </div>
    <h1>{{title}}</h1>
    <div class="header-button search">
        <span class="glyphicon glyphicon-search" aria-hidden="true" (click)="onBtnClick()"></span>
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