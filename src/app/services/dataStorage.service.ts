import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {List} from 'immutable';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {SearchModel} from "../models/Search.model";


@Injectable()
export class DataStorage {
    private _searchData:BehaviorSubject<List<SearchModel[]>> = new BehaviorSubject(List([]));

    public get searchData() {
        return this._searchData.asObservable();
    }
}
