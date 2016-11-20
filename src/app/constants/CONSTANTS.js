"use strict";
var CONSTANTS = (function () {
    function CONSTANTS() {
    }
    Object.defineProperty(CONSTANTS, "SEARCH_TYPE", {
        get: function () {
            return {
                TRACK: 'track',
                ALBUM: 'album',
                ARTIST: 'artist'
            };
        },
        enumerable: true,
        configurable: true
    });
    return CONSTANTS;
}());
exports.CONSTANTS = CONSTANTS;
//# sourceMappingURL=CONSTANTS.js.map