const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "products",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      storeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "stores",
          },
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    },
  );
  Product.associate = (models) => {
    Product.belongsTo(models.store, { foreignKey: "storeId", as: "store" });
  };
  return Product;
};
