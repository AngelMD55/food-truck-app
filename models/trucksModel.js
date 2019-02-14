module.exports = function(sequelize, DataTypes) {
    const  truck = sequelize.define('trucks', {
        truckName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        priceRange:{
            type: CharacterData(4),
            allowNull: false
        },
        foodCategory1:{
            type: DataTypes.STRING,
            allowNull: false            
        },
        foodCategory2:{
            type: DataTypes.STRING          
        },
        foodCategory1:{
            type: DataTypes.STRING           
        }
    }, {
        freezeTableName: true,
    });
  
    return truck;
  }