module.exports = function (sequelize, DataTypes) {
    const Truck = sequelize.define('Truck', {
        truckName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'userName'
        },
        priceRange:{
            type: DataTypes.CHAR(4),
            allowNull: false,
            defaultValue: '0'
        },
        foodCategory1: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'cat1'
        },
        foodCategory2: {
            type: DataTypes.STRING
            // defaultValue: 'cat2'
        },
        foodCategory3: {
            type: DataTypes.STRING
            // defaultValue: 'cat3'
        },
        truckLive:{
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        truckLat: {
            type: DataTypes.DECIMAL(10, 8),
            allowNull: false,
            defaultValue: (32.2226)
        },
        truckLng: {
            type: DataTypes.DECIMAL(11, 8),
            allowNull: false,
            defaultValue: (110.9747)
        },
    }, {
            freezeTableName: true,
        });

    return Truck;
}