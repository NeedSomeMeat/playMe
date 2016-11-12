import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By}              from '@angular/platform-browser';
import {DebugElement}    from '@angular/core';
import {Header} from "./header.component";

let comp: Header;
let fixture: ComponentFixture<Header>;
let de: DebugElement;
let el: HTMLElement;

describe('Header Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [Header], // declare the test component + children
        });

        fixture = TestBed.createComponent(Header);

        comp = fixture.componentInstance; // Header test instance

        // query for the text <div> by CSS element selector
        de = fixture.debugElement.query(By.css('div'));
        el = de.nativeElement;
    });

    it('should display a test title and button text', () => {
        comp.title = 'Test Title';
        comp.button = 'Test Text';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
        expect(el.textContent).toContain('Test Text');
    });

    it('should not show the button if value isn\'t setted', () => {
        let btn = fixture.debugElement.query(By.css('button'));

        expect(btn).toBe(null)
    });

    it('should trigger the event "click"', () => {
        comp.button = 'test button';
        comp.btnClicked.subscribe(()=> evetn = true);
        fixture.detectChanges();

        let
            btn = fixture.debugElement.query(By.css('button')),
            evetn = false;

        btn.triggerEventHandler('click', null);

        expect(evetn).toBe(true);
    });
});