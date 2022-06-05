-- DROP PROCEDURE FilterClasses;
DELIMITER $$

CREATE PROCEDURE FilterClasses(
    class_id INT,
    year_int INT,
    uc_id INT,
    component VARCHAR(3),
    n_hours FLOAT,
    prof_id INT

)
BEGIN
	SELECT *  FROM classes
    WHERE   (class_id=-1 OR classes.class_id = class_id)
        AND (year_int=-1 OR classes.year_int = year_int)
        AND (uc_id=-1 OR classes.uc_num = uc_id)
        AND (component IS NULL OR classes.component = component)
        AND (n_hours=-1.0 OR classes.class_hours = n_hours)
        AND (prof_id=-1 OR classes.prof_id = prof_id);

END $$

DELIMITER ;
-- CALL FilterClasses(-1,-1,-1,"P",-1.0,-1);

-- DROP PROCEDURE FilterDepartments;
DELIMITER $$

CREATE PROCEDURE FilterDepartments(
    id INT,
    acronym VARCHAR(10),
    dept_name VARCHAR(100),
    dept_address VARCHAR(100), 
    phone VARCHAR(20)

)
BEGIN
	SELECT *  FROM departments
    WHERE   (id=-1 OR departments.dept_id = id)
        AND (acronym IS NULL OR departments.acronym LIKE CONCAT('%',acronym,'%'))
        AND (dept_name IS NULL OR departments.dept_name LIKE CONCAT('%',dept_name,'%'))
        AND (dept_address IS NULL OR departments.dept_address LIKE CONCAT('%',dept_address,'%'))
        AND (phone IS NULL OR departments.phone LIKE CONCAT('%',phone,'%'));

END $$

DELIMITER ;
-- CALL FilterDepartments(-1,NULL,NULL,NULL,NULL);

-- DROP PROCEDURE FilterProfessors;
DELIMITER $$

CREATE PROCEDURE FilterProfessors(
    prof_id INT,
    nmec INT,
    email VARCHAR(50),
    phone VARCHAR(20),
    acronym VARCHAR(10),
    prof_name VARCHAR(100),
    prof_rank VARCHAR(30),
    situation VARCHAR(30),
    department INT
)
BEGIN
	SELECT *  FROM professors
    WHERE   (prof_id=-1 OR professors.prof_id = prof_id)
        AND (nmec=-1 OR professors.nmec = nmec)
        AND (email IS NULL OR professors.email LIKE CONCAT('%',email,'%'))
        AND (phone IS NULL OR professors.phone LIKE CONCAT('%',phone,'%'))
        AND (acronym IS NULL OR professors.acronym LIKE CONCAT('%',acronym,'%'))
        AND (prof_name IS NULL OR professors.prof_name LIKE CONCAT('%',prof_name,'%'))
        AND (prof_rank IS NULL OR professors.prof_rank LIKE CONCAT('%',prof_rank,'%'))
        AND (situation IS NULL OR professors.situation LIKE CONCAT('%',situation,'%'))
        AND (department=-1 OR professors.department_num = department);

END $$

DELIMITER ;

-- CALL FilterProfessors(-1,-1,NULL, NULL, NULL, NULL, NULL, NULL,-1);

-- DROP PROCEDURE FilterDsders;
DELIMITER $$

CREATE PROCEDURE FilterDsders(
    dsder_id INT

)
BEGIN
	SELECT *  FROM dsders
    WHERE   (dsder_id=-1 OR dsders.dsder_id = dsder_id);

END $$

DELIMITER ;
-- CALL FilterDsders(-1);

-- DROP PROCEDURE FilterCourses;
DELIMITER $$

CREATE PROCEDURE FilterCourses(
    course_id INT,
    acronym VARCHAR(10),
    course_name VARCHAR(100),
    department_id INT,
    director_id INT

)
BEGIN
	SELECT *  FROM courses
    WHERE   (course_id=-1 OR courses.course_id = course_id)
        AND (acronym IS NULL OR courses.acronym LIKE CONCAT('%',acronym,'%'))
        AND (course_name IS NULL OR courses.course_name LIKE CONCAT('%',course_name,'%'))
        AND (department_id=-1 OR courses.department = department_id)
        AND (director_id=-1 OR courses.director = director_id);

END $$

DELIMITER ;
-- CALL FilterCourses(-1,NULL,NULL,-1,-1);

-- DROP PROCEDURE FilterUcs;
DELIMITER $$

CREATE PROCEDURE FilterUcs(
    uc_id INT,
    acronym VARCHAR(10),
    uc_name VARCHAR(100),
    director INT
)
BEGIN
	SELECT *  FROM ucs
    WHERE   (uc_id=-1 OR ucs.uc_id = uc_id)
        AND (acronym IS NULL OR ucs.acronym LIKE CONCAT('%',acronym,'%'))
        AND (uc_name IS NULL OR ucs.uc_name LIKE CONCAT('%',uc_name,'%'))
        AND (director=-1 OR ucs.director = director);

END $$

DELIMITER ;
-- CALL FilterUcs(-1,NULL,NULL,-1);

-- DROP PROCEDURE FilterWishlists;
DELIMITER $$

CREATE PROCEDURE FilterWishlists(
    wishlist_id INT,
    year_int INT,
    prof_id INT,
    uc_id INT
)
BEGIN
	SELECT *  FROM wishlists
    WHERE   (wishlist_id=-1 OR wishlists.wishlist_id = wishlist_id)
        AND (year_int=-1 OR wishlists.year_int = year_int)
        AND (prof_id=-1 OR wishlists.professor = prof_id)
        AND (uc_id=-1 OR wishlists.uc_id = uc_id);

END $$

DELIMITER ;
-- CALL FilterWishlists(-1,-1,-1,-1);

-- DROP PROCEDURE ValidateDsd;
DELIMITER $$

CREATE PROCEDURE ValidateDsd(max_hours FLOAT)
BEGIN
    SELECT * FROM prof_total_hours
    WHERE total_hours IS NULL OR total_hours >= max_hours
    UNION
    SELECT uc_acronym, component FROM classes_main_panel_info
    WHERE prof_id IS NULL;
END $$

DELIMITER ;
-- CALL ValidateDsd(9);

-- DROP PROCEDURE ExportDsd;
DELIMITER $$

CREATE PROCEDURE ExportDsd()
BEGIN
    SELECT classes_main_panel_info.*, prof_total_hours.total_hours AS prof_total_hours
    FROM classes_main_panel_info LEFT JOIN prof_total_hours ON classes_main_panel_info.prof_acronym = prof_total_hours.prof_acronym
    UNION
    SELECT NULL AS class_id, NULL AS uc_id, NULL AS uc_acronym, NULL AS uc_name, NULL AS director_acronym, NULL AS students_estimate,
    NULL AS component, NULL AS class_hours, NULL AS availability_percent,  prof_id, prof_acronym, prof_name, total_hours AS prof_total_hours 
    FROM professors_main_panel_info
    WHERE professors_main_panel_info.total_hours IS NULL;
END $$

DELIMITER ;
-- CALL ExportDsd();