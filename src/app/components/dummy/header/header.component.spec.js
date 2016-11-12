"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var header_component_1 = require("./header.component");
var comp;
var fixture;
var de;
var el;
describe('Header Component', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [],
            declarations: [header_component_1.Header],
        });
        fixture = testing_1.TestBed.createComponent(header_component_1.Header);
        comp = fixture.componentInstance; // Header test instance
        // query for the text <div> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('div'));
        el = de.nativeElement;
    });
    it('should display a test title and button text', function () {
        comp.title = 'Test Title';
        comp.button = 'Test Text';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
        expect(el.textContent).toContain('Test Text');
    });
    it('should not show the button if value isn\'t setted', function () {
        var btn = fixture.debugElement.query(platform_browser_1.By.css('button'));
        expect(btn).toBe(null);
    });
    it('should trigger the event "click"', function () {
        comp.button = 'test button';
        comp.btnClicked.subscribe(function () { return evetn = true; });
        fixture.detectChanges();
        var btn = fixture.debugElement.query(platform_browser_1.By.css('button')), evetn = false;
        btn.triggerEventHandler('click', null);
        expect(evetn).toBe(true);
    });
});
//# sourceMappingURL=header.component.spec.js.map