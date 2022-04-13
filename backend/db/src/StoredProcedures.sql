DROP PROCEDURE FilterClasses;

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