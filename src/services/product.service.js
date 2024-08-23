const { Op } = require("sequelize");
const db = require("../models");
const Product = db.product;

exports.getAllData = async () => {
  return Product.findAll();
};

exports.getProductByUser = async (userId, pagination) => {
  console.log(pagination);
  
  const data = await db.product.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: "%bia%",
          },
        },
        {
          description: {
            [Op.like]: "%bia%",
          },
        },
      ],
    },
    include: [
      {
        association: "store",
        where: { ownerId: userId },
      },
    ],
  });
  return data;
};

exports.createData = async (dataParams) => {
  const newData = User.create(dataParams);
  return newData;
};
