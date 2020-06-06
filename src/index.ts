export class PaginationUtility {
  static getValuesToPaginate(options: {
    currentPage: number;
    perPage: number;
  }) {
    const currentPage = Math.floor(options.currentPage);
    const perPage = Math.floor(options.perPage);
    const offset = currentPage == 1 ? 0 : (currentPage - 1) * perPage;
    const limit = perPage * 1;

    return { limit, offset };
  }

  static getTotalPages(options: { totalItems: number; perPage: number }) {
    const perPage = Math.floor(options.perPage);
    const totalItems = options.totalItems == 0 ? 1 : options.totalItems;
    let totalPages;

    if (totalItems == 1 || totalItems <= perPage) {
      totalPages = 1;
    } else {
      totalPages =
        totalItems % perPage > 0
          ? Math.floor(totalItems / perPage) + 1
          : totalItems / perPage;
    }

    return totalPages;
  }
}
