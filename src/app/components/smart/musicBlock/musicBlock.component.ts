import {Component, ViewEncapsulation, Input, OnInit} from '@angular/core';
import {HelperService} from "../../../services/helper.service";
import {AudioService} from "../../../services/audio.service";

@Component({
    selector: 'music-block',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./musicBlock.component.less'],
    template: `
<div class="music-block">
    <div class="music-block-content">
        <music-stuff [params]="helper.chooseData(data)" (clicked)="initSong()" 
        [playing]="playing"></music-stuff>
        <control-buttons></control-buttons>
    </div>
    
    <audio-sound *ngIf="data?.type === 'track'" (volumeChanged)="volume($event)" [volume]="music.volume"></audio-sound>
</div>
`
})
export class MusicBlock implements OnInit{
    @Input() data:any = {};
    private playing:boolean = false;

    constructor(private helper: HelperService, private music: AudioService) {
    }

    public ngOnInit():void {
        if(this.data.id === this.music.nowPlaying) {
            this.playing = !this.music.pause;
            this.initSong = this.toggleSong;
        }
    }

    private initSong():void {
        if(this.data.preview_url) {
            this.playing = !this.playing;
            this.music.nowPlaying = this.data.id;
            this.music.playSong(this.data.preview_url);

            this.initSong = this.toggleSong;
        }
    }

    private toggleSong():void {
        this.playing = !this.playing;
        this.playing ?
            this.music.playSong() :
            this.music.stopSong()
    }

    private volume(value:number):void {
        this.music.volume = value;
    }
}