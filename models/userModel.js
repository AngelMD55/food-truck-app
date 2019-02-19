const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
      defaultValue: "UserName"
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
      type: DataTypes.CHAR(12),
      defaultValue: "555-555-5555"
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userAddress: {
      type: DataTypes.STRING,
      defaultValue: "Address"
    },
    userCity: {
      type: DataTypes.STRING,
      defaultValue: "City"
    },
    userState: {
      type: DataTypes.STRING,
      defaultValue: "State"
    },
    userZipCode: {
      type: DataTypes.CHAR(5),
      defaultValue: "85711"
    },
    userGender: {
      type: DataTypes.STRING,
      defaultValue: "Gender"
    },
    userBday:{
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    paidUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: '0',
    }

  }, {
      freezeTableName: true,
      instanceMethods: {
        generateHash(userPassword) {
          return bcrypt.hash(userPassword, bcrypt.genSaltSync(8));
        },
        validPassword(userPassword) {
          return bcrypt.compare(userPassword, this.userPassword);
        }
      }
    });
  return User;
};
