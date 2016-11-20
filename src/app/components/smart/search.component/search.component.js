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
var searchCache_model_1 = require("../../../models/searchCache.model");
var Search = (function () {
    function Search() {
        var _this = this;
        this.searchModel = new core_1.EventEmitter();
        this.selectedType = new core_1.EventEmitter();
        this.searchString = new core_1.EventEmitter();
        this.searchParam = {};
        this.cachedType = '';
        this.options = [
            'Track',
            'Album',
            'Artist'
        ];
        this.subscriberSearchModel = this.selectedType
            .combineLatest(this.searchString, function (type, searchString) {
            return new searchCache_model_1.SearchCacheModel(type, searchString);
        })
            .subscribe(function (searchParams) { return _this.searchModel.emit(searchParams); });
    }
    Search.prototype.ngOnInit = function () {
        var _a = this.searchCache, type = _a.type, searchString = _a.searchString;
        this.searchParam.search = searchString;
        this.cachedType = type;
    };
    Search.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscriberSearch = this.searchForm.control.valueChanges
            .debounceTime(600)
            .filter(function (values) { return values.search && values.search.trim().length >= 3; })
            .map(function (values) { return values.search.trim().replace(/  +/g, ' '); })
            .distinctUntilChanged()
            .subscribe(function (string) {
            _this.searchString.emit(string);
        });
    };
    Search.prototype.ngOnDestroy = function () {
        this.subscriberSearch.unsubscribe();
        this.subscriberSearchModel.unsubscribe();
    };
    Search.prototype.selectType = function (type) {
        this.selectedType.emit(type);
        this.focusInput();
    };
    Search.prototype.focusInput = function () {
        this.input.nativeElement.focus();
    };
    __decorate([
        core_1.ViewChild('searchForm'), 
        __metadata('design:type', Object)
    ], Search.prototype, "searchForm", void 0);
    __decorate([
        core_1.ViewChild('input'), 
        __metadata('design:type', Object)
    ], Search.prototype, "input", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Search.prototype, "searchModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', searchCache_model_1.SearchCacheModel)
    ], Search.prototype, "searchCache", void 0);
    Search = __decorate([
        core_1.Component({
            selector: 'search',
            styleUrls: ['./search.component.less'],
            template: "\n<form #searchForm=\"ngForm\" class=\"search-block\">\n  <input #input type=\"search\" [(ngModel)]=\"searchParam.search\" name=\"search\" ngControl=\"search\" autofocus>\n  <dropdown [options]=\"options\" [marker]=\"cachedType\" (selected)=\"selectType($event)\"></dropdown>\n</form>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Search);
    return Search;
}());
exports.Search = Search;
//# sourceMappingURL=search.component.js.map