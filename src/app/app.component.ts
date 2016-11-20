import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
    selector: 'app',
    template: `
<header [title]="sharedTitle" [button]="sharedBtn" (btnClicked)="sharedFunction()" (goBack)="backButton()"></header>
<router-outlet (activate)='onActivate($event)'></router-outlet>
`
})
export class AppComponent {
    public sharedFunction:Function;
    public backButton:Function;
    public sharedBtn:string;
    public sharedTitle:string;

    private onActivate(comp:any):void {
        if(comp.title)
            this.sharedTitle = comp.title;

        if(comp.backButton)
            this.backButton = comp.backButton;

        if(comp.sharedButton){
            this.sharedBtn = comp.sharedButton;
            this.sharedFunction = comp.sharedFunction;
        }
    }

}
