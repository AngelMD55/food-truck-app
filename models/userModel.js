const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define("users", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userPhoneNum: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userCity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userState: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userZipCode: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    userGender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userBday: DataTypes.DATEONLY,
    paidUser: {
      type: BOOLEAN,
      defaultValue: '0',
    }

  }, {
      freezeTableName: true,
      instanceMethods: {
        generateHash(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
          return bcrypt.compare(password, this.password);
        }
      }
    });
  return user;
};
