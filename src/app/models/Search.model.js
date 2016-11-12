"use strict";
var SearchModel = (function () {
    function SearchModel(album, artists, available_markets, disc_number, duration_ms, explicit, external_ids, external_urls, href, id, name, popularity, preview_url, track_number, uri, type) {
        if (album === void 0) { album = {}; }
        if (artists === void 0) { artists = []; }
        if (available_markets === void 0) { available_markets = []; }
        if (disc_number === void 0) { disc_number = null; }
        if (duration_ms === void 0) { duration_ms = null; }
        if (explicit === void 0) { explicit = null; }
        if (external_ids === void 0) { external_ids = {}; }
        if (external_urls === void 0) { external_urls = {}; }
        if (href === void 0) { href = ""; }
        if (id === void 0) { id = ""; }
        if (name === void 0) { name = ""; }
        if (popularity === void 0) { popularity = null; }
        if (preview_url === void 0) { preview_url = ""; }
        if (track_number === void 0) { track_number = null; }
        if (uri === void 0) { uri = ""; }
        if (type === void 0) { type = ""; }
        this.album = album;
        this.artists = artists;
        this.available_markets = available_markets;
        this.disc_number = disc_number;
        this.duration_ms = duration_ms;
        this.explicit = explicit;
        this.external_ids = external_ids;
        this.external_urls = external_urls;
        this.href = href;
        this.id = id;
        this.name = name;
        this.popularity = popularity;
        this.preview_url = preview_url;
        this.track_number = track_number;
        this.uri = uri;
        this.type = type;
    }
    return SearchModel;
}());
exports.SearchModel = SearchModel;
//# sourceMappingURL=Search.model.js.map