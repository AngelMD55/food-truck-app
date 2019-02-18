module.exports = function (sequelize, DataTypes) {
    const truck = sequelize.define('trucks', {
        truckName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        priceRange:{
            type: DataTypes.CHAR(4),

            allowNull: false
        },
        foodCategory1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        foodCategory2: {
            type: DataTypes.STRING
        },
        foodCategory3: {
            type: DataTypes.STRING
        },
        truckLive:{
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        truckLatLng: {
            type: DataTypes.GEOMETRY,
            defaultValue: (32.2226, 110.9747)
        },
    }, {
            freezeTableName: true,
        });

    return truck;
}