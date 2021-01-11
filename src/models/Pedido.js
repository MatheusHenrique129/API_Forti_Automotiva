const { Model, DataTypes } = require("sequelize");

class Pedido extends Model {
    //
    static init(sequelize){
        super.init(
            {
                cliente: DataTypes.STRING,
                protudo: DataTypes.STRING,
                quantidade: DataTypes.INTEGER
            },
            {
                sequelize, 
            }
        )
    }

    static associate(models){

    }
}

module.exports = Pedido;