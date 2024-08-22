"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("stores", [
      {
        id: 1,
        ownerId: 2,
        name: "Đại Phát Nghệ An",
        address: "Nghệ An",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        ownerId: 2,
        name: "Đại Phát Hà Nội",
        address: "Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stores", null, {});
  },
};
