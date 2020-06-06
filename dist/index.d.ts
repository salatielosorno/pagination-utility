export declare class PaginationUtility {
    static getValuesToPaginate(options: {
        currentPage: number;
        perPage: number;
    }): {
        limit: number;
        offset: number;
    };
    static getTotalPages(options: {
        totalItems: number;
        perPage: number;
    }): number;
}
