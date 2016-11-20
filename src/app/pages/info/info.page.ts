import {Component, OnInit} from '@angular/core';
import {IPage} from "../pages.interface";
import {DataStorage} from "../../services/dataStorage.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/operator/switchMap';

@Component({
    selector: 'info-page',
    template: `
<music-block [data]="stuff"></music-block>
<scroll-content></scroll-content>
  `
})
export class InfoPage implements IPage, OnInit{
    public title:string = 'Info';
    public backButton:boolean = true;
    private stuff:any;

    constructor(private store:DataStorage,
                private route:ActivatedRoute) {
    }

    public ngOnInit():void {
        this.route.params
            .switchMap((params: Params) => this.store.getStuff(params['id']))
            .subscribe((object:any) => this.stuff = object);
    }
}