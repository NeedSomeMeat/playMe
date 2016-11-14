"use strict";
var CONSTANTS = (function () {
    function CONSTANTS() {
    }
    Object.defineProperty(CONSTANTS, "SEARCH_TYPE", {
        get: function () {
            return {
                ARTIST: 'artist',
                ALBUM: 'album',
                TRACK: 'track'
            };
        },
        enumerable: true,
        configurable: true
    });
    return CONSTANTS;
}());
exports.CONSTANTS = CONSTANTS;
//# sourceMappingURL=CONSTANTS.js.map