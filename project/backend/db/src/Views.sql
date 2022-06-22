CREATE VIEW classes_temp1 AS
SELECT ucs.uc_id, ucs.acronym AS uc_acronym, ucs.uc_name, ucs.director, ucs.students_estimate,
classes.class_id,classes.component, classes.class_hours, classes.availability_percent, 
professors.prof_id, professors.acronym AS prof_acronym, professors.prof_name
FROM (classes LEFT OUTER JOIN professors ON professors.prof_id = classes.prof_id)
JOIN ucs ON ucs.uc_id = classes.uc_num;

CREATE VIEW count_classes AS
SELECT uc_acronym AS acronym, COUNT(uc_acronym) AS classes_num, COUNT(prof_id) AS assigned_classes, (COUNT(uc_acronym) - COUNT(prof_id)) AS unassigned_classes
FROM classes_temp1
GROUP BY uc_acronym;

CREATE VIEW classes_main_panel_info AS
SELECT class_id, uc_id, uc_acronym, uc_name, professors.acronym AS director_acronym, students_estimate,
component, class_hours, availability_percent, classes_num, assigned_classes, unassigned_classes,
classes_temp1.prof_id, classes_temp1.prof_acronym, classes_temp1.prof_name
FROM professors, classes_temp1, count_classes
WHERE classes_temp1.director=professors.prof_id AND classes_temp1.uc_acronym=count_classes.acronym;

CREATE VIEW professors_temp1 AS
SELECT classes.class_id,classes.component, classes.class_hours, classes.availability_percent, classes.uc_num,
professors.prof_id, professors.acronym AS prof_acronym, professors.prof_name
FROM (professors LEFT OUTER JOIN classes ON professors.prof_id = classes.prof_id);

CREATE VIEW professors_temp2 AS
SELECT *
FROM ( professors_temp1 LEFT OUTER JOIN ucs ON professors_temp1.uc_num = ucs.uc_id);

CREATE VIEW prof_total_hours AS
SELECT prof_acronym, IFNULL(ROUND(SUM(class_hours*availability_percent*0.01),1),0) as total_hours
FROM professors_temp2
GROUP BY prof_acronym;

CREATE VIEW professors_main_panel_info AS
SELECT prof_id, professors_temp2.prof_acronym, prof_name, prof_total_hours.total_hours,
class_id, uc_num, professors_temp2.acronym AS uc_acronym, uc_name, students_estimate, director, component, class_hours, availability_percent
FROM (professors_temp2 LEFT OUTER JOIN prof_total_hours ON professors_temp2.prof_acronym = prof_total_hours.prof_acronym);

