"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("product_unit", [
      {
        id: 1,
        storeId: 1,
        productId: 1,
        unitId: 1,
        price: 25000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        storeId: 1,
        productId: 1,
        unitId: 6,
        price: 95000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_unit", null, {});
  },
};
