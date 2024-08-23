const { GetPagination } = require("../decorators/get.pagination.decorators");
const productService = require("../services/product.service");
// Controller method to get all todos
exports.getProduct = async (req, res) => {
  try {
    const userId = req.query.userId;
    const paginationDto = {};
    if (req.query.limit) {
      paginationDto.limit = req.query.limit;
    }
    if (req.query.skip) {
      paginationDto.skip = req.query.skip;
    }
    if (req.query.search) {
      paginationDto.search = req.query.search;
    }

    const pagination = GetPagination(paginationDto);

    const data = await productService.getProduct(userId, pagination);
    res.status(200).json({ status: 1, data: data });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error: error.message });
  }
};
