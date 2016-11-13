import {Component, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'search',
    styleUrls: ['./search.component.less'],

    template: `
<form #searchForm="ngForm" class="search-block">
  <input #input type="search" [(ngModel)]="searchParam.search" name="search" ngControl="search" autofocus>
  <dropdown [options]="options" (selected)="selectType($event)"></dropdown>
</form>
  `
})
export class Search implements AfterViewInit, OnDestroy {
    @ViewChild('searchForm') searchForm: any;
    @ViewChild('input') input: any;

    @Output() selectedType: EventEmitter<any> = new EventEmitter();
    @Output() searchString: EventEmitter<any> = new EventEmitter();
    private subscriberSearch: any;
    private searchParam: any = {};
    private options: Array<any>;

    constructor() {
        this.options = [
            'Track',
            'Album',
            'Artist'
        ];
    }

    public ngAfterViewInit(): void {
        this.subscriberSearch = this.searchForm.control.valueChanges
            .filter((values:any) => values.search && values.search.trim().length >= 3)
            .map((values:any) => values.search.trim().replace(/  +/g, ' '))
            .distinctUntilChanged()
            .subscribe((string: string) => {
                this.searchString.emit(string);
            });
    }

    public ngOnDestroy(): void {
        this.subscriberSearch.unsubscribe();
    }

    private selectType(type: string): void {
        this.selectedType.emit(type);
        this.focusInput();
    }

    public focusInput(): void {
        this.input.nativeElement.focus();
    }
}