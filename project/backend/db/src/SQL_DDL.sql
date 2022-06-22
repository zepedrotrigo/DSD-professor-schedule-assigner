CREATE TABLE dsd.departments(
    dept_id INT,
    acronym VARCHAR(10) UNIQUE,
    dept_name VARCHAR(100),
    dept_address VARCHAR(100), 
    phone VARCHAR(20),

    PRIMARY KEY (dept_id)
);

CREATE TABLE dsd.professors(
    prof_id INT AUTO_INCREMENT,
    nmec INT UNIQUE,
    email VARCHAR(50) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    acronym VARCHAR(10) NOT NULL UNIQUE,
    prof_name VARCHAR(100) NOT NULL,
    prof_rank VARCHAR(30),
    situation VARCHAR(30),
    department_num INT,
    
    PRIMARY KEY (prof_id),
    CONSTRAINT FOREIGN KEY (department_num) REFERENCES dsd.departments(dept_id)
);

CREATE TABLE dsd.dsders(
    dsder_id INT,
    
    PRIMARY KEY (dsder_id),
    CONSTRAINT FOREIGN KEY (dsder_id) REFERENCES dsd.professors(prof_id)
);

CREATE TABLE dsd.courses(
    course_id INT,
    acronym VARCHAR(10) UNIQUE,
    course_name VARCHAR (100),
    department INT,
    director INT,

    PRIMARY KEY (course_id),
    CONSTRAINT FOREIGN KEY (director) REFERENCES dsd.professors(prof_id),
    CONSTRAINT FOREIGN KEY (department) REFERENCES dsd.departments(dept_id)
);

CREATE TABLE dsd.ucs(
    uc_id INT,
    acronym VARCHAR(10),
    uc_name VARCHAR(100),
    students_estimate INT,
    director INT,

    PRIMARY KEY (uc_id),
    CONSTRAINT FOREIGN KEY (director) REFERENCES dsd.professors(prof_id)
);

CREATE TABLE dsd.classes(
    class_id INT AUTO_INCREMENT,
    year_int INT NOT NULL,
    uc_num INT,
    component VARCHAR(3) NOT NULL,
    class_hours FLOAT, 
    prof_id INT DEFAULT NULL,
    availability_percent INT DEFAULT NULL,

    PRIMARY KEY (class_id),
    CONSTRAINT FOREIGN KEY (uc_num) REFERENCES dsd.ucs(uc_id),
    CONSTRAINT FOREIGN KEY (prof_id) REFERENCES dsd.professors(prof_id)
);

CREATE TABLE dsd.wishlists(
    wishlist_id INT AUTO_INCREMENT,
    year_int INT NOT NULL,
    professor INT,
    preference VARCHAR(20) NOT NULL DEFAULT 'neutral',
    uc_id INT,
    
    PRIMARY KEY (wishlist_id),
    CONSTRAINT FOREIGN KEY (professor) REFERENCES dsd.professors(prof_id),
    CONSTRAINT FOREIGN KEY (uc_id) REFERENCES dsd.ucs(uc_id)
);