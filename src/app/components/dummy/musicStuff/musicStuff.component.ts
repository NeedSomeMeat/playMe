import {Component, Input, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {MusicStuffModel} from "../../../models/musicStuff.model";

@Component({
    selector: 'music-stuff',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['musicStuff.component.less'],
    template: `
<div class="music-stuff-content" (click)="clicked.emit()">
    <img [src]="params?.img" alt="">
    <div class="music-stuff-content-info">
        <span *ngIf="params?.song" class="play glyphicon" 
        [ngClass]="{'glyphicon-play-circle': !playing, 'glyphicon-pause-circle': playing}"></span>
        <h2>{{params?.name}}</h2>
        <h4 class="text-success">
            <span *ngFor="let item of params?.subName">{{item.name}}</span>
        </h4>
    </div>
</div>
  `
})
export class MusicStuff {
    @Input() params: MusicStuffModel = new MusicStuffModel();
    @Input() playing: boolean = false;
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    constructor() {
    }
}