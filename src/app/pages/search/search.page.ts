import {Component, OnInit} from '@angular/core';
import {IPage} from "../pages.interface";
import {DataStorage} from "../../services/dataStorage.service";
import {SearchCacheModel} from "../../models/searchCache.model";

@Component({
    selector: 'search-page',
    template: `
<div>
    <search (searchModel)="searchModelHandler($event)" [searchCache]="searchCache"></search>
    <music-stuff-container [data]="store.searchData | async"></music-stuff-container>
</div>
  `
})
export class SearchPage implements IPage, OnInit {
    private searchCache: SearchCacheModel;
    public title: string = 'Explore Sound';
    public sharedButton: string = 'search';

    constructor(private store: DataStorage) { }

    public ngOnInit():void {
        let cache:SearchCacheModel = this.store.searchCache();
        if(cache)
            this.searchCache = cache;
    }

    private searchModelHandler(searchParams: SearchCacheModel): void {
        this.store.searchFor(searchParams);
    }

    public sharedFunction(): void {
        console.log('CLICKED')
    }
}