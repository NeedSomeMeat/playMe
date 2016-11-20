import {Component, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy, Input, OnInit} from '@angular/core';
import {SearchCacheModel} from "../../../models/searchCache.model";

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

    private selectedType: EventEmitter<any> = new EventEmitter();
    private searchString: EventEmitter<any> = new EventEmitter();
    private subscriberSearch: any;
    private subscriberSearchModel: any;
    private searchParam: any = {};
    private options: Array<any>;
    private cachedType: string = '';

    constructor() {
        this.options = [
            'Track',
            'Album',
            'Artist'
        ];

        this.subscriberSearchModel = this.selectedType
            .combineLatest(this.searchString,
                (type: string, searchString: string) => {
                    return new SearchCacheModel(type, searchString)
                })
            .subscribe((searchParams: SearchCacheModel) => this.searchModel.emit(searchParams))
    }

    public ngOnInit(): void {
        let {type, searchString} = this.searchCache;
        this.searchParam.search = searchString;
        this.cachedType = type;
    }

    public ngAfterViewInit(): void {
        this.subscriberSearch = this.searchForm.control.valueChanges
            .debounceTime(600)
            .filter((values: any) => values.search && values.search.trim().length >= 3)
            .map((values: any) => values.search.trim().replace(/  +/g, ' '))
            .distinctUntilChanged()
            .subscribe((string: string) => {
                this.searchString.emit(string);
            });
    }

    public ngOnDestroy(): void {
        this.subscriberSearch.unsubscribe();
        this.subscriberSearchModel.unsubscribe();
    }

    private selectType(type: string): void {
        this.selectedType.emit(type);
        this.focusInput();
    }

    public focusInput(): void {
        this.input.nativeElement.focus();
    }
}