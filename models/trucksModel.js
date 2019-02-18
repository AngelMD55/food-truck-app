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
<<<<<<< HEAD
        truckLatLng: {
            type: DataTypes.GEOMETRY,
            defaultValue: (32.2226, 110.9747)
=======
        truckLat: {
            type: DataTypes.DECIMAL(10, 8),
            allowNull: false,
            defaultValue: (32.2226)
        },
        truckLng: {
            type: DataTypes.DECIMAL(11, 8),
            allowNull: false,
            defaultValue: (110.9747)
>>>>>>> 59a3739c4b62bf8158654b84615b65144cbf0494
        },
    }, {
            freezeTableName: true,
        });

    return truck;
}