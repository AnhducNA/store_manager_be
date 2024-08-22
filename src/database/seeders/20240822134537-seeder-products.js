"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        id: 1,
        storeId: 1,
        name: "Bánh quy",
        image: "https://bootdey.com/img/Content/avatar/avatar1.png",
        description: "Các loại bánh quy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        storeId: 1,
        name: "Bánh ngọt",
        image: "https://bootdey.com/img/Content/avatar/avatar2.png",
        description: "Các loại bánh ngọt",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 1,
        name: "Bia Hà Nội",
        image: "https://bootdey.com/img/Content/avatar/avatar3.png",
        description: "Các loại bia Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 1,
        name: "Bia Sài Gòn",
        image: "https://bootdey.com/img/Content/avatar/avatar4.png",
        description: "Các loại bia Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
