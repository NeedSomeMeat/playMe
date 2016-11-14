"use strict";
var AlbumModel = (function () {
    function AlbumModel(album_type, artists, available_markets, external_urls, href, id, images, name, type, uri) {
        if (album_type === void 0) { album_type = ""; }
        if (artists === void 0) { artists = []; }
        if (available_markets === void 0) { available_markets = []; }
        if (external_urls === void 0) { external_urls = {}; }
        if (href === void 0) { href = ""; }
        if (id === void 0) { id = ""; }
        if (images === void 0) { images = []; }
        if (name === void 0) { name = ""; }
        if (type === void 0) { type = ""; }
        if (uri === void 0) { uri = ""; }
        this.album_type = album_type;
        this.artists = artists;
        this.available_markets = available_markets;
        this.external_urls = external_urls;
        this.href = href;
        this.id = id;
        this.images = images;
        this.name = name;
        this.type = type;
        this.uri = uri;
    }
    return AlbumModel;
}());
exports.AlbumModel = AlbumModel;
//# sourceMappingURL=album.model.js.map