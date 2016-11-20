import {Injectable, EventEmitter} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {SearchCacheModel} from "../../../models/searchCache.model";


@Injectable()
export class SearchStore {
    private _selectedType: EventEmitter<string> = new EventEmitter<string>();
    private _searchString: EventEmitter<string> = new EventEmitter<string>();
    private _searchModel: BehaviorSubject<SearchCacheModel> = new BehaviorSubject(new SearchCacheModel());


    constructor() {
        this._selectedType
            .combineLatest(this._searchString,
                (type: string, searchString: string) => {
                    return new SearchCacheModel(type, searchString)
                })
            .subscribe((searchParams: SearchCacheModel) => this._searchModel.next(searchParams))
    }

    public get searchModel () {
        return this._searchModel.asObservable();
    }

    public set selectedType (type:string) {
        this._selectedType.next(type)
    }

    public set searchString (query:string) {
        this._searchString.next(query)
    }
}
