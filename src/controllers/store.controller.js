const storeService = require("../services/store.service");
// Controller method to get all todos
exports.getStoreByUser = async (req, res) => {
  try {
    const userId = 2;
    const data = await storeService.getStoreByUser(userId);
    res.status(200).json({ status: 1, data: data });
  } catch (error) {
    return res.status(500).json({ error: "store.controller.fail" });
  }
};
