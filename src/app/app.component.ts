import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
    selector: 'app',
    template: `
<header [title]="sharedTitle" [button]="sharedBtn" (btnClicked)="sharedFunction()"></header>
<router-outlet (activate)='onActivate($event)'></router-outlet>
`
})
export class AppComponent {
    public sharedFunction:Function;
    public sharedBtn:string;
    public sharedTitle:string;

    private onActivate(comp:any):void {
        if(comp.title)
            this.sharedTitle = comp.title;

        if(comp.button){
            this.sharedBtn = comp.button;
            this.sharedFunction = comp.sharedFunction;
        }
    }

}
