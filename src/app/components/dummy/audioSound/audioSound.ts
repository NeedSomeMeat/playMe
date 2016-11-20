import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'audio-sound',
    styleUrls: ['./audioSound.component.less'],
    template: `
<div class="progress vertical" (click)="setVolume($event)">
  <div class="progress-bar progress-bar-success" role="progressbar" 
    [ngStyle]="{'width': volume + '%'}">
    <span class="sr-only">Volume: {{volume}}%</span>
  </div>
</div>
`
})
export class AudioSound {
    private volume:number = 100;
    @Output() volumeChanged: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    private setVolume(event:any):void {
        event.stopPropagation();
        let maxVolume = event.target.clientWidth;

        this.volume = (event.offsetX * 100) / maxVolume;
        this.volumeChanged.emit(this.volume);
    }
}