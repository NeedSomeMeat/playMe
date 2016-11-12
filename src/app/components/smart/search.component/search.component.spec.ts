import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By}              from '@angular/platform-browser';
import {DebugElement}    from '@angular/core';
import {Search} from "./search.component";

let comp: Search;
let fixture: ComponentFixture<Search>;
let de: DebugElement;
let el: HTMLElement;

describe('Search Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [Search], // declare the test component + children
        });

        fixture = TestBed.createComponent(Search);

        comp = fixture.componentInstance; // Search test instance

        // query for the text <div> by CSS element selector
        de = fixture.debugElement.query(By.css('div'));
        el = de.nativeElement;
    });

    it('should display a buttons', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain('Find');
    });
});