"use strict";
var MusicStuffModel = (function () {
    function MusicStuffModel(img, name, subName, song) {
        if (img === void 0) { img = ''; }
        if (name === void 0) { name = ''; }
        if (subName === void 0) { subName = []; }
        if (song === void 0) { song = false; }
        this.img = img;
        this.name = name;
        this.subName = subName;
        this.song = song;
    }
    return MusicStuffModel;
}());
exports.MusicStuffModel = MusicStuffModel;
//# sourceMappingURL=musicStuff.model.js.map