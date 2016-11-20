"use strict";
var SearchCacheModel = (function () {
    function SearchCacheModel(type, searchString) {
        if (type === void 0) { type = ""; }
        if (searchString === void 0) { searchString = ""; }
        this.type = type;
        this.searchString = searchString;
    }
    return SearchCacheModel;
}());
exports.SearchCacheModel = SearchCacheModel;
//# sourceMappingURL=searchCache.model.js.map