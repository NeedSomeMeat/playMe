"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var search_component_1 = require("./search.component");
var comp;
var fixture;
var de;
var el;
describe('Search Component', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [],
            declarations: [search_component_1.Search],
        });
        fixture = testing_1.TestBed.createComponent(search_component_1.Search);
        comp = fixture.componentInstance; // Search test instance
        // query for the text <div> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('div'));
        el = de.nativeElement;
    });
    it('should display a buttons', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain('Find');
    });
});
//# sourceMappingURL=search.component.spec.js.map