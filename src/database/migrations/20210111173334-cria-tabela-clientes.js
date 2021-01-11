'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    queryInterface.createTable("pedidos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cliente: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      protudo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {

    queryInterface.dropTable("pedidos");
  }
};
