import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterOutlet, RouterOutletMap} from "@angular/router";
import {Header} from "./components/dummy/header/header.component";

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent, RouterOutlet, Header ],
            providers: [ RouterOutletMap ]
        });
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});
