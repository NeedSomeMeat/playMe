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
var helper_service_1 = require("../../../services/helper.service");
var audio_service_1 = require("../../../services/audio.service");
var MusicBlock = (function () {
    function MusicBlock(helper, music) {
        this.helper = helper;
        this.music = music;
        this.data = {};
        this.playing = false;
    }
    MusicBlock.prototype.ngOnInit = function () {
        if (this.data.id === this.music.nowPlaying) {
            this.playing = !this.music.pause;
            this.initSong = this.toggleSong;
        }
    };
    MusicBlock.prototype.initSong = function () {
        if (this.data.preview_url) {
            this.playing = !this.playing;
            this.music.nowPlaying = this.data.id;
            this.music.playSong(this.data.preview_url);
            this.initSong = this.toggleSong;
        }
    };
    MusicBlock.prototype.toggleSong = function () {
        this.playing = !this.playing;
        this.playing ?
            this.music.playSong() :
            this.music.stopSong();
    };
    MusicBlock.prototype.volume = function (value) {
        this.music.volume = value;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MusicBlock.prototype, "data", void 0);
    MusicBlock = __decorate([
        core_1.Component({
            selector: 'music-block',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./musicBlock.component.less'],
            template: "\n<div class=\"music-block\">\n    <div class=\"music-block-content\">\n        <music-stuff [params]=\"helper.chooseData(data)\" (clicked)=\"initSong()\" \n        [playing]=\"playing\"></music-stuff>\n        <control-buttons></control-buttons>\n    </div>\n    \n    <audio-sound *ngIf=\"data?.type === 'track'\" (volumeChanged)=\"volume($event)\" [volume]=\"music.volume\"></audio-sound>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [helper_service_1.HelperService, audio_service_1.AudioService])
    ], MusicBlock);
    return MusicBlock;
}());
exports.MusicBlock = MusicBlock;
//# sourceMappingURL=musicBlock.component.js.map