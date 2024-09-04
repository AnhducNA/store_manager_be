const { Op } = require("sequelize");
const db = require("../models");

exports.getProduct = async (userId, pagination) => {
  const { limit, skip, sort, search } = pagination;

  const whereSearchClause = whereSearchClauseFunction(search);

  const data = await db.product.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    include: [
      {
        association: "store",
        where: userId ? { ownerId: userId } : {},
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        required: true,
      },
    ],
    where: whereSearchClause,
    order: sort,
    limit,
    offset: skip,
    raw: true,
  });
  return data;
};

const whereSearchClauseFunction = (search) => {
  if (search.name && search.description) {
    return {
      [Op.and]: [
        {
          name: {
            [Op.like]: `%${search.name}%`,
          },
        },
        {
          description: {
            [Op.like]: `%${search.description}%`,
          },
        },
      ],
    };
  }

  if (search.name && !search.description) {
    return {
      [Op.like]: `${search.name}%`,
    };
  }
  if (!search.name && search.description) {
    return {
      [Op.like]: `${search.name}%`,
    };
  }
};

exports.createData = async (dataParams) => {
  const newData = User.create(dataParams);
  return newData;
};
