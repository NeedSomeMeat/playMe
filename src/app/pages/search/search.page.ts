import {Component} from '@angular/core';
import {IPage} from "../pages.interface";
import {DataStorage} from "../../services/dataStorage.service";

@Component({
    selector: 'search-page',
    template: `
<div>
    <search (searchModel)="searchModelHandler($event)"></search>
    <music-stuff-container [data]="store.searchData | async"></music-stuff-container>
</div>
  `
})
export class SearchPage implements IPage {
    public title: string = 'Explore Sound';
    public button: any = 'Find';

    constructor(private store: DataStorage) {
        store.searchData.subscribe((res:any) =>
            console.log('SSS ', res)
        )
    }

    private searchModelHandler(searchParams: any): void {
        this.store.searchFor(searchParams);
    }

    public sharedFunction(): void {
        console.log('CLICKED')
    }
}