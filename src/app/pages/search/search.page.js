"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dataStorage_service_1 = require("../../services/dataStorage.service");
var SearchPage = (function () {
    function SearchPage(store) {
        this.store = store;
        this.title = 'Explore Sound';
        this.button = 'Find';
        store.searchData.subscribe(function (res) {
            return console.log('SSS ', res);
        });
    }
    SearchPage.prototype.searchModelHandler = function (searchParams) {
        this.store.searchFor(searchParams);
    };
    SearchPage.prototype.sharedFunction = function () {
        console.log('CLICKED');
    };
    SearchPage = __decorate([
        core_1.Component({
            selector: 'search-page',
            template: "\n<div>\n    <search (searchModel)=\"searchModelHandler($event)\"></search>\n    <music-stuff-container [data]=\"store.searchData | async\"></music-stuff-container>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [dataStorage_service_1.DataStorage])
    ], SearchPage);
    return SearchPage;
}());
exports.SearchPage = SearchPage;
//# sourceMappingURL=search.page.js.map