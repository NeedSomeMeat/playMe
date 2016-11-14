"use strict";
var ArtistModel = (function () {
    function ArtistModel(external_urls, followers, genres, href, id, images, name, popularity, type, uri) {
        if (external_urls === void 0) { external_urls = {}; }
        if (followers === void 0) { followers = {}; }
        if (genres === void 0) { genres = []; }
        if (href === void 0) { href = ""; }
        if (id === void 0) { id = ""; }
        if (images === void 0) { images = []; }
        if (name === void 0) { name = ""; }
        if (popularity === void 0) { popularity = null; }
        if (type === void 0) { type = ""; }
        if (uri === void 0) { uri = ""; }
        this.external_urls = external_urls;
        this.followers = followers;
        this.genres = genres;
        this.href = href;
        this.id = id;
        this.images = images;
        this.name = name;
        this.popularity = popularity;
        this.type = type;
        this.uri = uri;
    }
    return ArtistModel;
}());
exports.ArtistModel = ArtistModel;
//# sourceMappingURL=artist.model.js.map