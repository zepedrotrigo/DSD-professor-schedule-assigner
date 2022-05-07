CREATE DATABASE mydatabase CHARACTER SET utf8 COLLATE utf8_general_ci;
SET NAMES 'utf8' COLLATE 'utf8_general_ci';

CREATE TABLE dsd.departments(
    id INT,
    acronym VARCHAR(10) UNIQUE,
    dept_name VARCHAR(100),
    dept_address VARCHAR(100), 
    phone VARCHAR(20),

    PRIMARY KEY (id)
);

CREATE TABLE dsd.professors(
    id INT AUTO_INCREMENT,
    nmec INT UNIQUE,
    email VARCHAR(50) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    acronym VARCHAR(10) NOT NULL UNIQUE,
    prof_name VARCHAR(100) NOT NULL,
    prof_rank VARCHAR(30),
    situation VARCHAR(30),
    department_num INT,
    
    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (department_num) REFERENCES dsd.departments(id)
);

CREATE TABLE dsd.dsders(
    id INT,
    
    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (id) REFERENCES dsd.professors(id)
);

CREATE TABLE dsd.courses(
    id INT,
    acronym VARCHAR(10) UNIQUE,
    course_name VARCHAR (100),
    department INT,
    director INT,

    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (director) REFERENCES dsd.professors(id),
    CONSTRAINT FOREIGN KEY (department) REFERENCES dsd.departments(id)
);

CREATE TABLE dsd.ucs(
    id INT,
    acronym VARCHAR(10),
    uc_name VARCHAR(100),
    students_estimate INT,
    director INT,

    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (director) REFERENCES dsd.professors(id)
);

CREATE TABLE dsd.classes(
    id INT AUTO_INCREMENT,
    year_int INT NOT NULL,
    uc_num INT,
    component VARCHAR(3) NOT NULL,
    class_hours FLOAT, 
    prof_id INT DEFAULT NULL,
    availability_percent INT DEFAULT NULL,

    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (uc_num) REFERENCES dsd.ucs(id),
    CONSTRAINT FOREIGN KEY (prof_id) REFERENCES dsd.professors(id)
);

CREATE TABLE dsd.wishlists(
    id INT AUTO_INCREMENT,
    year_int INT NOT NULL,
    professor INT,
    preference VARCHAR(20) NOT NULL DEFAULT 'neutral',
    uc_id INT,
    
    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (professor) REFERENCES dsd.professors(id),
    CONSTRAINT FOREIGN KEY (uc_id) REFERENCES dsd.ucs(id)
);