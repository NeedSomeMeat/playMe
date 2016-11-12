import {Component} from '@angular/core';

@Component({
    selector: 'search',
    template: `
<div>
  <input type="text">
  <button type="button">Find</button>
</div>
  `
})
export class Search {
    constructor() {
    }
}