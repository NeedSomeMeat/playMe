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
var MusicStuff = (function () {
    function MusicStuff() {
        this.params = {};
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MusicStuff.prototype, "params", void 0);
    MusicStuff = __decorate([
        core_1.Component({
            selector: 'music-stuff',
            styleUrls: ['musicStuff.component.less'],
            template: "\n<div class=\"music-stuff-content\">\n    <img [src]=\"params.img\" alt=\"\">\n    <div class=\"music-stuff-content-info\">\n        <span class=\"play glyphicon glyphicon-play\" aria-hidden=\"true\"></span>\n        <h2>{{params.name}}</h2>\n        <h4 class=\"text-success\">\n            <span *ngFor=\"let item of params.subName\">{{item.name}}</span>\n        </h4>\n    </div>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MusicStuff);
    return MusicStuff;
}());
exports.MusicStuff = MusicStuff;
//# sourceMappingURL=musicStuff.component.js.map