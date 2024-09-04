const { DataTypes } = require("sequelize");
const User = require("./user.model");
const Product = require("./product.model");

module.exports = (sequelize, Sequelize) => {
  const Store = sequelize.define(
    "stores",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: User,
          },
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    },
  );
  Store.associate = (models) => {
    Store.belongsTo(models.user, { foreignKey: "ownerId", as: "user" });
    Store.hasMany(models.product, { foreignKey: "storeId", as: "products" });
  };
  return Store;
};
