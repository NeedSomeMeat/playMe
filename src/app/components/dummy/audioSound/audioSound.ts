import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'audio-sound',
    styleUrls: ['./audioSound.component.less'],
    template: `
<div class="progress vertical" (click)="setVolume($event)">
  <div class="progress-bar progress-bar-success" role="progressbar" 
    [ngStyle]="{'width': volume * 100 + '%'}">
    <span class="sr-only">Volume: {{volume * 100}}%</span>
  </div>
</div>
`
})
export class AudioSound {
    @Output() volumeChanged: EventEmitter<any> = new EventEmitter();
    @Input() volume:number;

    constructor() {
    }

    private setVolume(event:any):void {
        event.stopPropagation();
        let maxVolume = event.target.clientWidth;
        this.volumeChanged.emit((event.offsetX * 100) / maxVolume);
    }
}