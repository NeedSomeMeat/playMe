import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class AudioService {
    private audio:HTMLAudioElement = new Audio();
    private _volume:BehaviorSubject<number> = new BehaviorSubject(1);
    private _nowPlaying:BehaviorSubject<string> = new BehaviorSubject('');
    private _pause:BehaviorSubject<boolean> = new BehaviorSubject(true);

    constructor() {
        this._volume.subscribe((value:number) => this.audio.volume = value)
    }

    public set nowPlaying (id:string) {
        this._nowPlaying.next(id);
    }

    public get nowPlaying () {
        return this._nowPlaying.getValue();
    }

    public get pause () {
        return this._pause.getValue();
    }

    public set volume (value:number) {
        this._volume.next(+(value / 100).toFixed(2));
    }

    public get volume () {
        return this._volume.getValue();
    }

    public playSong(url?:string):void {
        if (url) this.audio.src = url;
        this._pause.next(false);
        this.audio.play();
    }
    public stopSong():void {
        this._pause.next(true);
        this.audio.pause()
    }
}