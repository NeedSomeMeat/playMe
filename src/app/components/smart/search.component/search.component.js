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
var Search = (function () {
    function Search() {
        this.selectedType = new core_1.EventEmitter();
        this.searchString = new core_1.EventEmitter();
        this.searchParam = {};
        this.options = [
            'Track',
            'Album',
            'Artist'
        ];
    }
    Search.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscriberSearch = this.searchForm.control.valueChanges
            .filter(function (values) { return values.search && values.search.trim().length >= 3; })
            .map(function (values) { return values.search.trim().replace(/  +/g, ' '); })
            .distinctUntilChanged()
            .subscribe(function (string) {
            _this.searchString.emit(string);
        });
    };
    Search.prototype.ngOnDestroy = function () {
        this.subscriberSearch.unsubscribe();
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
    ], Search.prototype, "selectedType", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Search.prototype, "searchString", void 0);
    Search = __decorate([
        core_1.Component({
            selector: 'search',
            styleUrls: ['./search.component.less'],
            template: "\n<form #searchForm=\"ngForm\" class=\"search-block\">\n  <input #input type=\"search\" [(ngModel)]=\"searchParam.search\" name=\"search\" ngControl=\"search\" autofocus>\n  <dropdown [options]=\"options\" (selected)=\"selectType($event)\"></dropdown>\n</form>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Search);
    return Search;
}());
exports.Search = Search;
//# sourceMappingURL=search.component.js.map