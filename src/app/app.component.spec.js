"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
var router_1 = require("@angular/router");
var header_component_1 = require("./components/dummy/header/header.component");
describe('App', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent, router_1.RouterOutlet, header_component_1.Header],
            providers: [router_1.RouterOutletMap]
        });
    });
    it('should work', function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(true, 'should create AppComponent');
    });
});
//# sourceMappingURL=app.component.spec.js.map