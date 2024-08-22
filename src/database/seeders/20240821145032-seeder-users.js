"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        name: "admin",
        email: "admin@gmail.com",
        password:
          "$2a$10$iuc6on.j2CPBOpPipbn.TuFcSYfD/nCH/RGV/Z/rVdoFlLwszewMy", // 123456
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Le Anh Duc",
        email: "duc@gmail.com",
        password:
          "$2a$10$RnnvhvdPgjzs29xVTUYQ..PMWe9Md399CZ5tuPOd8tAifQYZ25sKC", // 123456
        role: "store_owner",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Le Anh Duc",
        email: "duc@gmail.com",
        password:
          "$2a$10$iuc6on.j2CPBOpPipbn.TuFcSYfD/nCH/RGV/Z/rVdoFlLwszewMy", // 123456
        role: "store_owner",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
