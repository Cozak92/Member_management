drop table if exists CUSTOMER CASCADE;
CREATE TABLE CUSTOMER (
	id INT PRIMARY KEY AUTO_INCREMENT,
	image VARCHAR(1024),
	name VARCHAR(64),
	birth date,
	gender VARCHAR(64),
	location VARCHAR(64),
	job VARCHAR(64),
	createdDated DATETIME,
	isDeleted INT

) DEFAULT character SET UTF8 COLLATE UTF8_GENERAL_CI;


