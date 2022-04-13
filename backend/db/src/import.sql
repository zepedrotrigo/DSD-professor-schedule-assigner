-- SQL DDL

CREATE TABLE dsd.department(
    id INT,
    acronym VARCHAR(5) UNIQUE,
    dept_name VARCHAR(100),
    dept_address VARCHAR(100), 
    phone VARCHAR(20),

    PRIMARY KEY (id)
);

CREATE TABLE dsd.professor(
    id INT AUTO_INCREMENT,
    nmec INT UNIQUE,
    email VARCHAR(50) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    acronym VARCHAR(5) NOT NULL UNIQUE,
    prof_name VARCHAR(100) NOT NULL,
    prof_rank VARCHAR(30),
    situation VARCHAR(30),
    department_num INT,
    
    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (department_num) REFERENCES dsd.department(id)
);

CREATE TABLE dsd.dsder(
    id INT,
    
    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (id) REFERENCES dsd.professor(id)
);

CREATE TABLE dsd.course(
    id INT,
    acronym VARCHAR(5) UNIQUE,
    course_name VARCHAR (100),
    department INT,
    director INT,

    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (director) REFERENCES dsd.professor(id),
    CONSTRAINT FOREIGN KEY (department) REFERENCES dsd.department(id)
);

CREATE TABLE dsd.uc(
    id INT,
    acronym VARCHAR(5),
    uc_name VARCHAR(50),
    students_estimate INT,
    director INT,

    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (director) REFERENCES dsd.professor(id)
);

CREATE TABLE dsd.classes(
    id INT AUTO_INCREMENT,
    year INT NOT NULL,
    uc_num INT,
    component VARCHAR(3) NOT NULL,
    class_hours FLOAT, 
    prof_id INT DEFAULT NULL,
    availability_percent INT DEFAULT NULL,

    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (uc_num) REFERENCES dsd.uc(id),
    CONSTRAINT FOREIGN KEY (prof_id) REFERENCES dsd.professor(id)
);

CREATE TABLE dsd.wishlist(
    id INT AUTO_INCREMENT,
    year INT NOT NULL,
    professor INT,
    preference VARCHAR(20) NOT NULL DEFAULT 'neutral',
    class_id INT,
    
    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (professor) REFERENCES dsd.professor(id),
    CONSTRAINT FOREIGN KEY (class_id) REFERENCES dsd.classes(id)
);

-- SQL DML

-- department
INSERT INTO dsd.department(id, acronym, dept_name, dept_address, phone) VALUES(11, "DMAT", "Dep. Matemática", "U.Aveiro 11", "+351965412445");
INSERT INTO dsd.department(id, acronym, dept_name, dept_address, phone) VALUES(4, "DETI", "Dep.ETI", "U.Aveiro 04", "+351123456789");
INSERT INTO dsd.department(id, acronym, dept_name, dept_address, phone) VALUES(23, "CP", "Comp. Ped", "U.Aveiro 23", "+351987654321");

-- professor
INSERT INTO dsd.professor(nmec, email, phone, acronym, prof_name, prof_rank, situation, department_num) VALUES(98597, "dg@ua.pt", "+3519348344541", "DG", "Diogo Gomes", "Associado", "Ativo", 4);
INSERT INTO dsd.professor(nmec, email, phone, acronym, prof_name, prof_rank, situation, department_num) VALUES(98598,"lsl@ua.pt", "+3519148374543", "LSL", "Luís Seabra","Auxiliar", "Ativo", 4);
INSERT INTO dsd.professor(nmec, email, phone, acronym, prof_name, prof_rank, situation, department_num) VALUES(98599,"tos@ua.pt", "+3519248341542", "MOS", "Miguel Silva","Catedrático", "Ativo", 4);

-- dsder
INSERT INTO dsd.dsder(id) VALUES(1);

-- course
INSERT INTO dsd.course(id, acronym, course_name, department, director) VALUES(141, "LEI", "lic eng inf", 04, 1);
INSERT INTO dsd.course(id, acronym, course_name, department, director) VALUES(152, "EET", "eng ele tele", 04, 2); 
INSERT INTO dsd.course(id, acronym, course_name, department, director) VALUES(174, "CT","cê tê", 04, 3);

-- uc
INSERT INTO dsd.uc(id, acronym, uc_name, students_estimate, director) VALUES (80501, "IAC", "Int Arq Comp", 120, 1 );
INSERT INTO dsd.uc(id, acronym, uc_name, students_estimate, director) VALUES (80502, "CD", "Comp Dist", 60, 2);
INSERT INTO dsd.uc(id, acronym, uc_name, students_estimate, director) VALUES (80503, "POO", "Prog Obj", 60, 3);
INSERT INTO dsd.uc(id, acronym, uc_name, students_estimate, director) VALUES (80504, "SIO", "Segurança", 60, 1);
INSERT INTO dsd.uc(id, acronym, uc_name, students_estimate, director) VALUES (80505, "BD", "Bases Dados", 60, 2);
INSERT INTO dsd.uc(id, acronym, uc_name, students_estimate, director) VALUES (80506, "FP", "Fund Progr", 60, 3);
INSERT INTO dsd.uc(id, acronym, uc_name, students_estimate, director) VALUES (80507, "SO", "Sist Opr", 60, 1);
INSERT INTO dsd.uc(id, acronym, uc_name, students_estimate, director) VALUES (80508, "C", "Compiladores", 60, 2);
INSERT INTO dsd.uc(id, acronym, uc_name, students_estimate, director) VALUES (80509, "AC1", "Arq Comp 1", 60, 3);

-- classes
INSERT INTO dsd.classes(year, uc_num, component, class_hours) VALUES(2022, 80501, "P", 2.5);
INSERT INTO dsd.classes(year, uc_num, component, class_hours) VALUES(2022, 80502, "P", 2.5);
INSERT INTO dsd.classes(year, uc_num, component, class_hours) VALUES(2022, 80503, "P", 2.5);
INSERT INTO dsd.classes(year, uc_num, component, class_hours) VALUES(2022, 80504, "P", 2.5);
INSERT INTO dsd.classes(year, uc_num, component, class_hours) VALUES(2022, 80505, "P", 2.5);
INSERT INTO dsd.classes(year, uc_num, component, class_hours) VALUES(2022, 80506, "P", 2.5);
INSERT INTO dsd.classes(year, uc_num, component, class_hours) VALUES(2022, 80507, "P", 2.5);
INSERT INTO dsd.classes(year, uc_num, component, class_hours) VALUES(2022, 80508, "P", 2.5);
INSERT INTO dsd.classes(year, uc_num, component, class_hours) VALUES(2022, 80509, "P", 2.5);

-- wishlist
INSERT INTO dsd.wishlist(year, professor, preference, class_id) VALUES(2022, 1, "neutral", 1);
INSERT INTO dsd.wishlist(year, professor, preference, class_id) VALUES(2022, 2, "likes", 2);
INSERT INTO dsd.wishlist(year, professor, preference, class_id) VALUES(2022, 3, "dislikes", 3);
INSERT INTO dsd.wishlist(year, professor, preference, class_id) VALUES(2022, 1, "neutral", 4);
INSERT INTO dsd.wishlist(year, professor, preference, class_id) VALUES(2022, 2, "likes", 5);
INSERT INTO dsd.wishlist(year, professor, preference, class_id) VALUES(2022, 3, "dislikes", 6);
INSERT INTO dsd.wishlist(year, professor, preference, class_id) VALUES(2022, 1, "neutral", 7);
INSERT INTO dsd.wishlist(year, professor, preference, class_id) VALUES(2022, 2, "likes", 8);
INSERT INTO dsd.wishlist(year, professor, preference, class_id) VALUES(2022, 3, "dislikes", 9);