import {Component} from '@angular/core';

@Component({
    selector: 'info-page',
    template: `
  <!--<info-content></info-content>-->
  <!--<audio-sound></audio-sound>-->
  <control-buttons></control-buttons>
  <scroll-content></scroll-content>
  `
})
export class InfoPage {
    constructor() {
    }
}