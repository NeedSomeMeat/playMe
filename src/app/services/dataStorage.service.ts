import {Injectable} from '@angular/core';
import {List} from 'immutable';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {BackendService} from "./backend.service";
import {SearchModel} from "../models/search.model";
import {CONSTANTS} from "../constants/CONSTANTS";
import {AlbumModel} from "../models/album.model";
import {ArtistModel} from "../models/artist.model";
import {TrackModel} from "../models/track.model";
import {SearchCacheModel} from "../models/searchCache.model";


@Injectable()
export class DataStorage {
    private _searchData:BehaviorSubject<List<any>> = new BehaviorSubject(List([]));
    private _searchQuery:BehaviorSubject<SearchCacheModel> = new BehaviorSubject(new SearchCacheModel());

    constructor(private backend: BackendService) { }

    public get searchData() {
        return this._searchData.asObservable();
    }

    public getStuff(id:string):any {
        return this._searchData.getValue().filter((obj:any) => obj.id === id);
    }

    public searchCache():any {
        return this._searchQuery.getValue();
    }

    public searchFor({type, searchString}: SearchCacheModel):void {
        this._searchQuery.next({type, searchString});

        this.backend.search(type, searchString)
            .map((res:any) => res[Object.keys(res)[0]])
            .subscribe(
                (res:SearchModel) => {
                    let {items, next, total} = res;

                    this._searchData.next(
                        List(this.assignDataToModel(items))
                    );
                },
                (err:any) => {}
            )
    }

    private assignDataToModel(data:any):any {
        const
            assignData = (obj:any, model:any):any =>
                (<any>Object).assign(new model(), obj);

        return data.map((item:any) => {
            switch (item.type) {
                case CONSTANTS.SEARCH_TYPE.ALBUM:
                    return assignData(item, AlbumModel);
                case CONSTANTS.SEARCH_TYPE.ARTIST:
                    return assignData(item, ArtistModel);
                case CONSTANTS.SEARCH_TYPE.TRACK:
                    return assignData(item, TrackModel);
                default:
                    return data;
            }
        })
    }
}
