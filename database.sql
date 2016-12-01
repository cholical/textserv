create database textserv;
use textserv;
create table Users 
(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(255),
	password VARCHAR(255),
	first_name VARCHAR(255),
	last_name VARCHAR(255)
);
create table Lists 
(
	list_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	list_name VARCHAR(255),
	list_description LONG
);
create table People 
(
	person_id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(255),
	last_name VARCHAR(255),	
	number INT
);
create table ListPeople
(
	list_people_id INT PRIMARY KEY AUTO_INCREMENT,
	list_id INT,
	person_id INT
);
create table Messages
(
	message_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	list_id INT,
	message_body LONG, 
	date TIMESTAMP
);