import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {HelperService} from "../../../services/helper.service";

@Component({
    selector: 'music-stuff-container',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./musicStuffContainer.component.less'],
    template: `
<div class="music-stuff-container">
  <music-stuff *ngFor="let stuff of data" [params]="helper.chooseData(stuff)" (clicked)="goToInfo(stuff)"></music-stuff>
</div>
  `
})
export class MusicStuffContainer {
    @Input() data:any;

    constructor(private router: Router, private helper: HelperService) {
    }

    private goToInfo({type ,id}:{type:string, id:string}):void {
        this.router.navigate([`/${type}`, id])
    }
}