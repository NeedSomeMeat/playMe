import {Component} from '@angular/core';
import {IPage} from "../pages.interface";

@Component({
    selector: 'search-page',
    template: `
<div>
    <p>
        Use the form below to search music, artists or albums
    </p>
    <search></search>
</div>
  `
})
export class SearchPage implements IPage {
    public title: string = 'Play Me';
    public button: any = 'Find';

    constructor() {
    }

    public sharedFunction(): void {
        console.log('CLICKED')
    }
}