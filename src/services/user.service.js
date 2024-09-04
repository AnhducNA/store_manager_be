const db = require("../models/index");

exports.getAllData = async () => {
  return db.user.findAll();
};

exports.createData = async (dataParams) => {
  const newData = db.user.create(dataParams);
  return newData;
};

exports.getUserByEmail = async (email) => {
  return await db.user.findOne({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: { email: email },
    raw: true,
  });
};
