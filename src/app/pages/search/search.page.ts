import {Component} from '@angular/core';
import {IPage} from "../pages.interface";

@Component({
    selector: 'search-page',
    template: `
<div>
    <search></search>
</div>
  `
})
export class SearchPage implements IPage {
    public title: string = 'Explore Sound';
    public button: any = 'Find';

    constructor() {
    }

    public sharedFunction(): void {
        console.log('CLICKED')
    }
}