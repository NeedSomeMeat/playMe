import {Component, ViewEncapsulation, Input} from '@angular/core';
import {HelperService} from "../../../services/helper.service";
import {AudioService} from "../../../services/audio.service";

@Component({
    selector: 'music-block',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./musicBlock.component.less'],
    template: `
<div class="music-block">
    <div class="music-block-content">
        <music-stuff [params]="helper.chooseData(data)" (clicked)="toggleSong()" 
        [playing]="playing"></music-stuff>
        <control-buttons></control-buttons>
    </div>
    
    <audio-sound (volumeChanged)="volume($event)"></audio-sound>
</div>
`
})
export class MusicBlock {
    @Input() data:any;
    private playing:boolean = false;

    constructor(private helper: HelperService, private music: AudioService) {
    }

    private toggleSong():void {
        if(this.data.preview_url) {
            this.playing = !this.playing;
            this.music.playSong(this.data.preview_url)

            this.toggleSong = () => {
                this.playing = !this.playing;
                this.playing ?
                    this.music.playSong() :
                    this.music.stopSong()
            }
        }
    }

    private volume(value:number):void {
        this.music.setVolume(value);
    }
}