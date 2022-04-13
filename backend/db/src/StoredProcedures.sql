-- DROP PROCEDURE FilterClasses;
DELIMITER $$

CREATE PROCEDURE FilterClasses(
    prof_id INT,
    uc_id INT,
    year_int INT
)
BEGIN
	SELECT *  FROM classes
    WHERE   (prof_id=-1 OR classes.prof_id = prof_id)
        AND (uc_id=-1 OR classes.uc_num = uc_id)
        AND (year_int=-1 OR classes.year_int = year_int);
END $$

DELIMITER ;
-- CALL FilterClasses(-1,-1,-1);

-- DROP PROCEDURE FilterProfessors;
DELIMITER $$

CREATE PROCEDURE FilterProfessors(
    prof_id INT,
    nmec INT,
    acronym VARCHAR(5),
    prof_name VARCHAR(100),
    prof_rank VARCHAR(30)
)
BEGIN
	SELECT *  FROM professors
    WHERE   (prof_id=-1 OR professors.id = prof_id)
        AND (nmec=-1 OR professors.nmec = nmec)
        AND (acronym IS NULL OR professors.acronym = acronym)
        AND (prof_name IS NULL OR professors.prof_name LIKE prof_name)
        AND (prof_rank IS NULL OR professors.prof_rank LIKE prof_rank);
END $$

DELIMITER ;

-- CALL FilterProfessors(-1,-1,NULL, NULL, NULL);