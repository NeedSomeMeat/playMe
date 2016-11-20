import {Injectable} from '@angular/core';
import {AlbumModel} from "../models/album.model";
import {ArtistModel} from "../models/artist.model";
import {TrackModel} from "../models/track.model";
import {MusicStuffModel} from "../models/musicStuff.model";


@Injectable()
export class HelperService {

    public chooseData(item: any): any {
        if(!item) return;

        switch (item.constructor) {
            case AlbumModel:
                return new MusicStuffModel(
                    item.images.length ? item.images[0].url : '',
                    item.name,
                    item.artists
                );
            case ArtistModel:
                return new MusicStuffModel(
                    item.images.length ? item.images[0].url : '',
                    item.name,
                    item.genres
                );
            case TrackModel:
                return new MusicStuffModel(
                    item.album.images.length ? item.album.images[0].url : '',
                    item.name,
                    item.artists,
                    true
                );
        }
    }
}