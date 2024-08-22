const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const User = require("./user.model");

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
  }
);
Store.associations = (models) => {
  Store.belongsTo(User, { foreignKey: "ownerId", as: "User" });
};

module.exports = Store;
