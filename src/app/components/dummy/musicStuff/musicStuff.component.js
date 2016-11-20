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
var musicStuff_model_1 = require("../../../models/musicStuff.model");
var MusicStuff = (function () {
    function MusicStuff() {
        this.params = new musicStuff_model_1.MusicStuffModel();
        this.playing = false;
        this.clicked = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', musicStuff_model_1.MusicStuffModel)
    ], MusicStuff.prototype, "params", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MusicStuff.prototype, "playing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MusicStuff.prototype, "clicked", void 0);
    MusicStuff = __decorate([
        core_1.Component({
            selector: 'music-stuff',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['musicStuff.component.less'],
            template: "\n<div class=\"music-stuff-content\" (click)=\"clicked.emit()\">\n    <img [src]=\"params?.img\" alt=\"\">\n    <div class=\"music-stuff-content-info\">\n        <span *ngIf=\"params?.song\" class=\"play glyphicon\" \n        [ngClass]=\"{'glyphicon-play-circle': !playing, 'glyphicon-pause-circle': playing}\"></span>\n        <h2>{{params?.name}}</h2>\n        <h4 class=\"text-success\">\n            <span *ngFor=\"let item of params?.subName\">{{item.name}}</span>\n        </h4>\n    </div>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MusicStuff);
    return MusicStuff;
}());
exports.MusicStuff = MusicStuff;
//# sourceMappingURL=musicStuff.component.js.map