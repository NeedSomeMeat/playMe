import {Component, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy, Input, OnInit} from '@angular/core';
import {SearchCacheModel} from "../../../models/searchCache.model";
import {SearchStore} from "./search.store";
import {CONSTANTS} from "../../../constants/CONSTANTS";

@Component({
    selector: 'search',
    styleUrls: ['./search.component.less'],

    template: `
<form #searchForm="ngForm" class="search-block">
  <input #input type="search" [(ngModel)]="searchParam.search" name="search" ngControl="search" autofocus>
  <dropdown [options]="options" [marker]="cachedType" (selected)="selectType($event)"></dropdown>
</form>
  `
})
export class Search implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('searchForm') searchForm: any;
    @ViewChild('input') input: any;
    @Output() searchModel: EventEmitter<any> = new EventEmitter();
    @Input() searchCache: SearchCacheModel;

    private subscriberInput: any;
    private subscriberSearch: any;
    private searchParam: any = {};
    private options: Array<string>;
    private cachedType: string = '';

    constructor(private searchStore:SearchStore) {
        this.options = Object.keys(CONSTANTS.SEARCH_TYPE);

        this.subscriberSearch = searchStore.searchModel.subscribe(
                (searchParams: SearchCacheModel) => this.searchModel.emit(searchParams)
        );
    }

    public ngOnInit(): void {
        let {type, searchString} = this.searchCache;
        this.searchParam.search = searchString;
        this.cachedType = type;
    }

    public ngAfterViewInit(): void {
        this.subscriberInput = this.searchForm.control.valueChanges
            .debounceTime(600)
            .filter((values: any) => values.search && values.search.trim().length >= 3)
            .map((values: any) => values.search.trim().replace(/  +/g, ' '))
            .distinctUntilChanged()
            .subscribe((string: string) => {
                this.searchStore.searchString = string;
            });
    }

    public ngOnDestroy(): void {
        this.subscriberInput.unsubscribe();
        this.subscriberSearch.unsubscribe();
    }

    private selectType(type: string): void {
        this.searchStore.selectedType = type;
        this.focusInput();
    }

    public focusInput(): void {
        this.input.nativeElement.focus();
    }
}