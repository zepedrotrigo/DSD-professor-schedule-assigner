CREATE VIEW assigned_classes AS
SELECT ucs.acronym AS uc_acronym, ucs.uc_name,
classes.component, classes.class_hours, classes.availability_percent, 
professors.acronym AS prof_acronym, professors.prof_name
FROM (classes JOIN professors ON professors.id = classes.prof_id) 
JOIN ucs ON ucs.id = classes.uc_num;