"use strict";
var SearchModel = (function () {
    function SearchModel(href, items, limit, next, offset, previous, total) {
        if (href === void 0) { href = ""; }
        if (items === void 0) { items = []; }
        if (limit === void 0) { limit = null; }
        if (next === void 0) { next = ""; }
        if (offset === void 0) { offset = null; }
        if (previous === void 0) { previous = ""; }
        if (total === void 0) { total = null; }
        this.href = href;
        this.items = items;
        this.limit = limit;
        this.next = next;
        this.offset = offset;
        this.previous = previous;
        this.total = total;
    }
    return SearchModel;
}());
exports.SearchModel = SearchModel;
//# sourceMappingURL=search.model.js.map