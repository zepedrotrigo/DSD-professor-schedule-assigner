CREATE VIEW temp_dsd_main_info AS
SELECT ucs.id, ucs.acronym AS uc_acronym, ucs.uc_name, ucs.director, ucs.students_estimate,
classes.component, classes.class_hours, classes.availability_percent, 
professors.acronym AS prof_acronym, professors.prof_name
FROM (classes LEFT OUTER JOIN professors ON professors.id = classes.prof_id) 
JOIN ucs ON ucs.id = classes.uc_num;

CREATE VIEW prof_total_hours AS
SELECT prof_acronym, SUM(class_hours*availability_percent*0.01) as total_hours
FROM temp_dsd_main_info
GROUP BY prof_acronym

CREATE VIEW dsd_main_info AS
SELECT uc_acronym, uc_name, professors.acronym AS director_acronym, students_estimate,
component, class_hours, availability_percent, 
temp_dsd_main_info.prof_acronym, temp_dsd_main_info.prof_name, total_hours
FROM professors, temp_dsd_main_info, prof_total_hours
WHERE temp_dsd_main_info.director=professors.id
AND professors.acronym = prof_total_hours.prof_acronym

-- NOTE: REVIEW VIEW TEMPDSDMAININFO
