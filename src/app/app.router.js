"use strict";
var router_1 = require('@angular/router');
var search_page_1 = require("./pages/search/search.page");
var info_page_1 = require("./pages/info/info.page");
exports.routes = [
    { path: '', component: search_page_1.SearchPage },
    { path: 'info/:id', component: info_page_1.InfoPage },
    { path: 'artist/:id', component: info_page_1.InfoPage },
    { path: 'album/:id', component: info_page_1.InfoPage },
    { path: 'track/:id', component: info_page_1.InfoPage }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.router.js.map