-- departments
INSERT INTO dsd.departments(id, acronym, dept_name, dept_address, phone) VALUES(11, "DMAT", "Dep. Matemática", "U.Aveiro 11", "+351965412445");
INSERT INTO dsd.departments(id, acronym, dept_name, dept_address, phone) VALUES(4, "DETI", "Dep.ETI", "U.Aveiro 04", "+351123456789");
INSERT INTO dsd.departments(id, acronym, dept_name, dept_address, phone) VALUES(23, "CP", "Comp. Ped", "U.Aveiro 23", "+351987654321");

-- professors
INSERT INTO dsd.professors(nmec, email, phone, acronym, prof_name, prof_rank, situation, department_num) VALUES(98597, "dg@ua.pt", "+3519348344541", "DG", "Diogo Gomes", "Associado", "Ativo", 4);
INSERT INTO dsd.professors(nmec, email, phone, acronym, prof_name, prof_rank, situation, department_num) VALUES(98598,"lsl@ua.pt", "+3519148374543", "LSL", "Luís Seabra","Auxiliar", "Ativo", 4);
INSERT INTO dsd.professors(nmec, email, phone, acronym, prof_name, prof_rank, situation, department_num) VALUES(98599,"tos@ua.pt", "+3519248341542", "MOS", "Miguel Silva","Catedrático", "Ativo", 4);

-- dsders
INSERT INTO dsd.dsders(id) VALUES(1);

-- courses
INSERT INTO dsd.courses(id, acronym, course_name, department, director) VALUES(141, "LEI", "lic eng inf", 04, 1);
INSERT INTO dsd.courses(id, acronym, course_name, department, director) VALUES(152, "EET", "eng ele tele", 04, 2); 
INSERT INTO dsd.courses(id, acronym, course_name, department, director) VALUES(174, "CT","cê tê", 04, 3);

-- ucs
INSERT INTO dsd.ucs(id, acronym, uc_name, students_estimate, director) VALUES (80501, "IAC", "Int Arq Comp", 120, 1 );
INSERT INTO dsd.ucs(id, acronym, uc_name, students_estimate, director) VALUES (80502, "CD", "Comp Dist", 60, 2);
INSERT INTO dsd.ucs(id, acronym, uc_name, students_estimate, director) VALUES (80503, "POO", "Prog Obj", 60, 3);
INSERT INTO dsd.ucs(id, acronym, uc_name, students_estimate, director) VALUES (80504, "SIO", "Segurança", 60, 1);
INSERT INTO dsd.ucs(id, acronym, uc_name, students_estimate, director) VALUES (80505, "BD", "Bases Dados", 60, 2);
INSERT INTO dsd.ucs(id, acronym, uc_name, students_estimate, director) VALUES (80506, "FP", "Fund Progr", 60, 3);
INSERT INTO dsd.ucs(id, acronym, uc_name, students_estimate, director) VALUES (80507, "SO", "Sist Opr", 60, 1);
INSERT INTO dsd.ucs(id, acronym, uc_name, students_estimate, director) VALUES (80508, "C", "Compiladores", 60, 2);
INSERT INTO dsd.ucs(id, acronym, uc_name, students_estimate, director) VALUES (80509, "AC1", "Arq Comp 1", 60, 3);

-- classes
INSERT INTO dsd.classes(year_int, uc_num, component, class_hours) VALUES(2022, 80501, "P", 2.5);
INSERT INTO dsd.classes(year_int, uc_num, component, class_hours) VALUES(2022, 80502, "P", 2.5);
INSERT INTO dsd.classes(year_int, uc_num, component, class_hours) VALUES(2022, 80503, "P", 2.5);
INSERT INTO dsd.classes(year_int, uc_num, component, class_hours) VALUES(2022, 80504, "P", 2.5);
INSERT INTO dsd.classes(year_int, uc_num, component, class_hours) VALUES(2022, 80505, "P", 2.5);
INSERT INTO dsd.classes(year_int, uc_num, component, class_hours) VALUES(2022, 80506, "P", 2.5);
INSERT INTO dsd.classes(year_int, uc_num, component, class_hours) VALUES(2022, 80507, "P", 2.5);
INSERT INTO dsd.classes(year_int, uc_num, component, class_hours) VALUES(2022, 80508, "P", 2.5);
INSERT INTO dsd.classes(year_int, uc_num, component, class_hours) VALUES(2022, 80509, "P", 2.5);

-- wishlists
INSERT INTO dsd.wishlists(year_int, professor, preference, class_id) VALUES(2022, 1, "neutral", 1);
INSERT INTO dsd.wishlists(year_int, professor, preference, class_id) VALUES(2022, 2, "likes", 2);
INSERT INTO dsd.wishlists(year_int, professor, preference, class_id) VALUES(2022, 3, "dislikes", 3);
INSERT INTO dsd.wishlists(year_int, professor, preference, class_id) VALUES(2022, 1, "neutral", 4);
INSERT INTO dsd.wishlists(year_int, professor, preference, class_id) VALUES(2022, 2, "likes", 5);
INSERT INTO dsd.wishlists(year_int, professor, preference, class_id) VALUES(2022, 3, "dislikes", 6);
INSERT INTO dsd.wishlists(year_int, professor, preference, class_id) VALUES(2022, 1, "neutral", 7);
INSERT INTO dsd.wishlists(year_int, professor, preference, class_id) VALUES(2022, 2, "likes", 8);
INSERT INTO dsd.wishlists(year_int, professor, preference, class_id) VALUES(2022, 3, "dislikes", 9);