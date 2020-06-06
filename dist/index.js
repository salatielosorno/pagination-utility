"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaginationUtility = /** @class */ (function () {
    function PaginationUtility() {
    }
    PaginationUtility.getValuesToPaginate = function (options) {
        var currentPage = Math.floor(options.currentPage);
        var perPage = Math.floor(options.perPage);
        var offset = currentPage == 1 ? 0 : (currentPage - 1) * perPage;
        var limit = perPage * 1;
        return { limit: limit, offset: offset };
    };
    PaginationUtility.getTotalPages = function (options) {
        var perPage = Math.floor(options.perPage);
        var totalItems = options.totalItems == 0 ? 1 : options.totalItems;
        var totalPages;
        if (totalItems == 1 || totalItems <= perPage) {
            totalPages = 1;
        }
        else {
            totalPages =
                totalItems % perPage > 0
                    ? Math.floor(totalItems / perPage) + 1
                    : totalItems / perPage;
        }
        return totalPages;
    };
    return PaginationUtility;
}());
exports.PaginationUtility = PaginationUtility;
