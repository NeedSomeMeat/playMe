import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'header',
    styleUrls: ['./header.component.less'],
    template: `
<div class="header-block">
    <div class="header-button back" (click)="goBack()">
        <span *ngIf="doCheck()" class="glyphicon glyphicon-chevron-left"></span>
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
    @Input() backButton:boolean;
    @Input() button:string;
    @Output() btnClicked:EventEmitter<any> = new EventEmitter();

    constructor(private location: Location) {
    }

    private onBtnClick():void {
        this.btnClicked.emit();
    }

    private doCheck():boolean {
        return this.backButton;
    }

    private goBack():void {
        if(!this.backButton) return;
        this.location.back();
    }
}