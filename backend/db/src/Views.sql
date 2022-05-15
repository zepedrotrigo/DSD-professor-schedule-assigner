CREATE VIEW temp1 AS
SELECT ucs.id, ucs.acronym AS uc_acronym, ucs.uc_name, ucs.director, ucs.students_estimate,
classes.component, classes.class_hours, classes.availability_percent, 
professors.acronym AS prof_acronym, professors.prof_name
FROM (classes LEFT OUTER JOIN professors ON professors.id = classes.prof_id) 
JOIN ucs ON ucs.id = classes.uc_num;

CREATE VIEW temp2 AS
SELECT uc_acronym, uc_name, professors.acronym AS director_acronym, students_estimate,
component, class_hours, availability_percent, 
temp1.prof_acronym, temp1.prof_name
FROM professors, temp1
WHERE temp1.director=professors.id;

CREATE VIEW prof_total_hours AS
SELECT prof_acronym, SUM(class_hours*availability_percent*0.01) as total_hours
FROM temp1
GROUP BY prof_acronym;

CREATE VIEW dsd_main_info AS
SELECT uc_acronym, uc_name, prof_total_hours.prof_acronym AS director_acronym, students_estimate,
component, class_hours, availability_percent, 
temp2.prof_acronym, temp2.prof_name, prof_total_hours.total_hours
FROM temp2
LEFT OUTER JOIN prof_total_hours ON temp2.prof_acronym = prof_total_hours.prof_acronym;