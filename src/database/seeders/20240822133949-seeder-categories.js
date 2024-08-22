"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        id: 1,
        storeId: 1,
        name: "Bánh, kẹo",
        description: "Các loại bánh kẹo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 1,
        name: "Bia, rượu",
        description: "Các loại bia rượu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
