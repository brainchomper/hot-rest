CREATE DATABASE HotFood;

USE HotFood;

CREATE TABLE Reservations(
Email VARCHAR(100) NOT NULL,
UserName VARCHAR(100) NOT NULL,
Phone INT(11) NOT NULL,
UserID MEDIUMINT AUTO_INCREMENT NOT NULL,
primary key(UserID)
);

select * from Reservations;