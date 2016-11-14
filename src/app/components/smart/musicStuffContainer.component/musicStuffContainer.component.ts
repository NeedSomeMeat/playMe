import {Component, Input} from '@angular/core';
import {AlbumModel} from "../../../models/album.model";
import {ArtistModel} from "../../../models/artist.model";
import {TrackModel} from "../../../models/track.model";

@Component({
    selector: 'music-stuff-container',
    styleUrls: ['./musicStuffContainer.component.less'],
    template: `
<div class="music-stuff-container">
  <music-stuff *ngFor="let stuff of data" [params]="chooseData(stuff)"></music-stuff>
</div>
  `
})
export class MusicStuffContainer {
    @Input() data:any;

    constructor() {
    }

    private chooseData(item:any):any {
        switch (item.constructor) {
            case AlbumModel:
                return {
                    img: item.images.length ? item.images[0].url: '',
                    name: item.name,
                    subName: item.artists
                };
            case ArtistModel:
                return {
                    img: item.images.length ? item.images[0].url : '',
                    name: item.name,
                    subName: item.genres
                };
            case TrackModel:
                return {
                    img: item.album.images.length ? item.album.images[0].url: '',
                    name: item.name,
                    subName: item.artists
                };
        }
    }
}