import { PaginationUtility } from '../index';

describe('Pagination Utility', () => {
  test('Get total pages with total - total items = 31', async () => {
    const totalItems = 31;
    const perPage = 10;

    const totalPages = PaginationUtility.getTotalPages({ totalItems, perPage });

    expect(totalPages).toMatchSnapshot();
  });

  test('Get total pages with total - total items = 30', async () => {
    const totalItems = 30;
    const perPage = 10;

    const totalPages = PaginationUtility.getTotalPages({ totalItems, perPage });

    expect(totalPages).toMatchSnapshot();
  });

  test('Get values to paginate = currentPage = 1', async () => {
    const currentPage = 1;
    const perPage = 10;

    const values = PaginationUtility.getValuesToPaginate({
      currentPage,
      perPage
    });

    expect(values).toMatchSnapshot();
  });

  test('Get values to paginate - currentPage = 5', async () => {
    const currentPage = 5;
    const perPage = 10;

    const values = PaginationUtility.getValuesToPaginate({
      currentPage,
      perPage
    });

    expect(values).toMatchSnapshot();
  });
});
