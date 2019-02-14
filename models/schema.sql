DROP DATABASE IF EXISTS foodtruckapp_DB;
CREATE DATABASE foodtruckapp_DB;

USE foodtruckapp_DB;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    userName VARCHAR(50) NOT NULL,
    userPassword BLOB NOT NULL,
    userType VARCHAR(15) NOT NULL,
    userPhoneNum CHAR NOT NULL,
    userEmail VARCHAR(100) NOT NULL,
    userBday DATE,
    dateJoined DATE NOT NULL,
    paidUser BOOLEAN NOT NULL

);

CREATE TABLE trucks(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    truckName VARCHAR(50) NOT NULL,
    UserName VARCHAR(50) NOT NULL,
    priceRange CHAR(4)
    foodCategory1 VARCHAR(20) NOT NULL,
    foodCategory2 VARCHAR(20),
    foodCategory3 VARCHAR(20)

);

CREATE TABLE foodCategories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    truckName VARCHAR(50) NOT NULL,
    userName VARCHAR(50) NOT NULL,
    foodCategory1 VARCHAR(20) NOT NULL,
    foodCategory2 VARCHAR(20),
    foodCategory3 VARCHAR(20)

);

CREATE TABLE userFavorites(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    truckName VARCHAR(50) NOT NULL,

);