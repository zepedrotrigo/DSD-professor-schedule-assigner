CREATE VIEW temp_assigned_classes AS
SELECT ucs.id, ucs.acronym AS uc_acronym, ucs.uc_name, ucs.director, ucs.students_estimate,
classes.component, classes.class_hours, classes.availability_percent, 
professors.acronym AS prof_acronym, professors.prof_name
FROM (classes LEFT OUTER JOIN professors ON professors.id = classes.prof_id) 
JOIN ucs ON ucs.id = classes.uc_num

CREATE VIEW assigned_classes AS
SELECT uc_acronym, uc_name, professors.acronym AS director_acronym, students_estimate,
component, class_hours, availability_percent, 
prof_acronym, temp_assigned_classes.prof_name
FROM professors JOIN temp_assigned_classes
WHERE temp_assigned_classes.director=professors.id;