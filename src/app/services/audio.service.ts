import {Injectable} from '@angular/core';


@Injectable()
export class AudioService {
    private audio = new Audio();

    public playSong(url?:string):void {
        if (url) this.audio.src = url;

        this.audio.play();
    }

    public stopSong():void {
        if(this.audio.src)
            this.audio.pause()
    }

    public setVolume(value:number):void {
        this.audio.volume = +(value / 100).toFixed(2);
    }
}