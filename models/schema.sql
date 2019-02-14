DROP DATABASE IF EXISTS foodtruckapp_DB;
CREATE DATABASE foodtruckapp_DB;

USE foodtruckapp_DB;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    userName VARCHAR(50) NOT NULL,
    userPassword BLOB NOT NULL,
    userPhoneNum CHAR NOT NULL,
    userEmail VARCHAR(100) NOT NULL,
    userBday DATE, 
    paidUser BOOLEAN NOT NULL

);

CREATE TABLE adminUsers(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    adminFirstName VARCHAR(50) NOT NULL,
    adminLastName VARCHAR(50) NOT NULL,
    adminUserName VARCHAR(50) NOT NULL,
    adminUserPassword BLOB NOT NULL,
    adminEmail VARCHAR(100) NOT NULL,
    paidAdminUser BOOLEAN NOT NULL,
    adminJoinDate DATE NOT NULL,

);

CREATE TABLE trucks(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    truckName VARCHAR(50) NOT NULL,
    adminUserName VARCHAR(50) NOT NULL,
    priceRange CHAR(4)

);

CREATE TABLE foodCategories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    truckName VARCHAR(50) NOT NULL,
    userName VARCHAR(50) NOT NULL,
    foodCategory1 VARCHAR(20) NOT NULL,
    foodCategory2 VARCHAR(20),
    foodCategory3 VARCHAR(20)

)

CREATE TABLE userFavorites(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    truckName VARCHAR(50) NOT NULL,

);