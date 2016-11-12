"use strict";
var testing_1 = require('@angular/core/testing');
var search_page_1 = require("./search.page");
var search_component_1 = require("../../components/smart/search.component/search.component");
describe('Search', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [search_page_1.SearchPage, search_component_1.Search]
        });
    });
    it('page init', function () {
        var fixture = testing_1.TestBed.createComponent(search_page_1.SearchPage);
        expect(fixture.componentInstance instanceof search_page_1.SearchPage).toBe(true, 'should create Search Page');
    });
});
//# sourceMappingURL=search.page.spec.js.map