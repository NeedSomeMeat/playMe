import {Component, Input} from '@angular/core';

@Component({
    selector: 'music-stuff',
    styleUrls: ['musicStuff.component.less'],
    template: `
<div class="music-stuff-content">
    <img [src]="params.img" alt="">
    <div class="music-stuff-content-info">
        <span class="play glyphicon glyphicon-play" aria-hidden="true"></span>
        <h2>{{params.name}}</h2>
        <h4 class="text-success">
            <span *ngFor="let item of params.subName">{{item.name}}</span>
        </h4>
    </div>
</div>
  `
})
export class MusicStuff {
    @Input() params: any = {};

    constructor() {
    }
}