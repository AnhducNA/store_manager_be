const GetPagination = (query) => {
  const paginationParams = { limit: 10, skip: 0, search: {} };
  if (query.limit) {
    paginationParams.limit = parseInt(query.limit.toString());
  }
  if (query.skip) {
    paginationParams.skip = parseInt(query.skip.toString());
  }
  if (query.search) {
    const searchArray = query.search.toString().split(",");
    searchArray.map((searchItem) => {
      const field = searchItem.split(":")[0];
      const value = searchItem.split(":")[1];
      paginationParams.search[field] = value.toString();
    });
  }
  return paginationParams;
};

module.exports = { GetPagination };
