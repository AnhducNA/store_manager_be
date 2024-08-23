const productService = require("../services/product.service");
// Controller method to get all todos
exports.getProductByUser = async (req, res) => {
  try {
    const userId = req.query.userId;
    const pagination = {
      limit: req.query.limit,
      skip: req.query.skip,
      search: req.query.search,
    };
    const data = await productService.getProductByUser(userId, pagination);
    res.status(200).json({ status: 1, data: data });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error: error.message });
  }
};
