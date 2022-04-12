CREATE TABLE dsd.professor(
    id INT,
    nmec INT UNIQUE,
    email VARCHAR(50) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    acronym VARCHAR(5) NOT NULL UNIQUE,
    [name] VARCHAR(100) NOT NULL,
    rank VARCHAR(30),
    situation VARCHAR(30),
    department_num INT,
    
    PRIMARY KEY (id),
    FOREIGN KEY (department) REFERENCES dsd.department(id)
);

CREATE TABLE dsd.dsder(
    id INT,
    
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES dsd.professor(id)
);

CREATE TABLE dsd.director(
    id INT,
    department_num INT,
    uc_num INT,
    
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES dsd.professor(id),
    FOREIGN KEY (department_num) REFERENCES dsd.department(id),
    FOREIGN KEY (uc_num) REFERENCES dsd.course(id)
);

CREATE TABLE dsd.wishlist(
    id INT,
    year INT NOT NULL,
    professor INT,
    preference VARCHAR(20) NOT NULL DEFAULT 'neutral',
    uc_num INT
    
    PRIMARY KEY (id),
    FOREIGN KEY (professor) REFERENCES dsd.professor(id),
    FOREIGN KEY (uc_num) REFERENCES dsd.course(id)
);

CREATE TABLE dsd.department(
    id INT,
    acronym VARCHAR(5) UNIQUE,
    [name] VARCHAR(100),
    [address] VARCHAR(100),
    phone INT,
    course VARCHAR(50),
    PRIMARY KEY (id),
    FOREIGN KEY (course) REFERENCES dsd.course(id)
);

CREATE TABLE dsd.course(
    id INT,
    acronym VARCHAR(5) UNIQUE,
    [name] VARCHAR (100),
    department INT,
    uc INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department) REFERENCES dsd.department(id),
    FOREIGN KEY (uc) REFERENCES dsd.uc(id) 
);

CREATE TABLE dsd.uc(
    id INT,
    acronym VARCHAR(5),
    [name] VARCHAR(50),
    students_estimate INT,
    classes INT,
    course INT,
    director INT
    PRIMARY KEY (id),
    FOREIGN KEY (classes) REFERENCES dsd.classes(id),
    FOREIGN KEY (course) REFERENCES dsd.course(id),
    FOREIGN KEY (director) REFERENCES dsd.director(id)
);

CREATE TABLE dsd.classes(
    id INT,
    year INT NOT NULL,
    uc_num INT,
    component VARCHAR(3) NOT NULL,
    [hours] INT,
    prof_id INT DEFAULT -1,
    [availability] BIT,
    PRIMARY KEY (id),
    FOREIGN KEY (uc_num) REFERENCES dsd.uc(id),
    FOREIGN KEY (prof_id) REFERENCES dsd.professor(id)
);