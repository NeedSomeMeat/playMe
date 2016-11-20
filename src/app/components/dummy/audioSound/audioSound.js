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
var AudioSound = (function () {
    function AudioSound() {
        this.volumeChanged = new core_1.EventEmitter();
    }
    AudioSound.prototype.setVolume = function (event) {
        event.stopPropagation();
        var maxVolume = event.target.clientWidth;
        this.volumeChanged.emit((event.offsetX * 100) / maxVolume);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AudioSound.prototype, "volumeChanged", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AudioSound.prototype, "volume", void 0);
    AudioSound = __decorate([
        core_1.Component({
            selector: 'audio-sound',
            styleUrls: ['./audioSound.component.less'],
            template: "\n<div class=\"progress vertical\" (click)=\"setVolume($event)\">\n  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" \n    [ngStyle]=\"{'width': volume * 100 + '%'}\">\n    <span class=\"sr-only\">Volume: {{volume * 100}}%</span>\n  </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AudioSound);
    return AudioSound;
}());
exports.AudioSound = AudioSound;
//# sourceMappingURL=audioSound.js.map