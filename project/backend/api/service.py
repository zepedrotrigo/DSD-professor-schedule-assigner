import json, csv, datetime

### Aux functions ###

def write_dict_to_file(dic, filetype):
    fpath = f"./export/dsd_{datetime.datetime.now().strftime('%d_%m_%Y_%hh_%mm_%ss')}.{filetype}"
    
    if filetype == "json":
        with open(fpath, "w") as outfile:
            json.dump(dic, outfile)
    else:
        with open(fpath, 'w') as outfile:
            writer = csv.DictWriter(outfile, dic["data"][0].keys())
            writer.writeheader()
            writer.writerows(dic["data"])
    
    return fpath

### Controller called functions ###

def get_classes(cursor, id, year, uc_id, component, hours, prof_id):
    '''Returns all classes (allows combined filters: id, year, uc_id, component, hours, prof_id)'''
    
    cursor.execute(f"CALL FilterClasses({id}, {year}, {uc_id}, {component}, {hours}, {prof_id});")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"classes": [dict(zip(keys, vals)) for vals in result]}

def get_departments(cursor, id, acronym, name, address, phone):
    '''Returns all departments (allows combined filters: id, acronym, name, address, phone)'''
    
    cursor.execute(f"CALL FilterDepartments({id}, {acronym}, {name}, {address}, {phone});")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"departments": [dict(zip(keys, vals)) for vals in result]}

def get_professors(cursor, prof_id, nmec, email, phone, acronym, name, rank, situation, department):
    '''Returns all professors (allows combined filters: prof_id, nmec, email, phone, acronym, name, rank, situation, department)'''

    cursor.execute(f"CALL FilterProfessors({prof_id}, {nmec},{email},{phone},{acronym},{name},{rank},{situation},{department});")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"professors": [dict(zip(keys, vals)) for vals in result]}

def get_dsders(cursor, id):
    '''Returns all dsders (allows filter: id)'''

    cursor.execute(f"CALL FilterDsders({id});")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"dsders": [dict(zip(keys, vals)) for vals in result]}

def get_courses(cursor, id, acronym, name, department, director):
    '''Returns all courses (allows filter: id, acronym, name, department, director)'''

    cursor.execute(f"CALL FilterCourses({id}, {acronym}, {name}, {department}, {director});")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"courses": [dict(zip(keys, vals)) for vals in result]}

def get_ucs(cursor, id, acronym, name, director):
    '''Returns all ucs (allows combined filters: id, acronym, name, director)'''

    cursor.execute(f"CALL FilterUcs({id}, {acronym}, {name}, {director});")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"ucs": [dict(zip(keys, vals)) for vals in result]}

def get_wishlists(cursor, id, year, prof_id, class_id):
    '''Returns all wishlists (allows combined filters: id, year, prof_id, class_id)'''

    cursor.execute(f"CALL FilterWishlists({id}, {year}, {prof_id}, {class_id});")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"wishlists": [dict(zip(keys, vals)) for vals in result]}

### --- ###

def create_department(db, cursor, dept):
    cursor.execute(f"INSERT INTO dsd.departments(dept_id, acronym, dept_name, dept_address, phone)\
        VALUES({dept.dept_id}, '{dept.acronym}', '{dept.dept_name}', '{dept.dept_address}', '{dept.phone}');")
    db.commit()

    return dept


def create_classe(db, cursor, classe):
    cursor.execute(f"INSERT INTO dsd.classes(prof_id, availability_percent, year_int, uc_num, component, class_hours)\
        VALUES({classe.prof_id}, {classe.availability_percent}, {classe.year}, {classe.uc_num}, '{classe.component}', {classe.class_hours});")
    db.commit()

    return classe

def create_professor(db, cursor, prof):
    cursor.execute(f"INSERT INTO dsd.professors(nmec, email, phone, acronym, prof_name, prof_rank, situation, department_num)\
        VALUES({prof.nmec}, '{prof.email}', '{prof.phone}', '{prof.acronym}', '{prof.prof_name}', '{prof.prof_rank}', '{prof.situation}', {prof.department_num});")
    db.commit()

    return prof

def create_dsder(db, cursor, dsder):
    cursor.execute(f"INSERT INTO dsd.dsders(dsder_id)\
        VALUES({dsder.prof_id});")
    db.commit()

    return dsder

def create_course(db, cursor, course):
    cursor.execute(f"INSERT INTO dsd.courses(course_id, acronym, course_name, department, director)\
        VALUES({course.course_id}, '{course.acronym}', '{course.course_name}', {course.department_id}, {course.director_id});")
    db.commit()

    return course

def create_uc(db, cursor, uc):
    cursor.execute(f"INSERT INTO dsd.ucs(uc_id, acronym, uc_name, students_estimate, director)\
        VALUES({uc.uc_id}, '{uc.acronym}', '{uc.uc_name}', {uc.students_estimate}, {uc.director});")
    db.commit()

    return uc

def create_wishlist(db, cursor, wishlist):
    cursor.execute(f"INSERT INTO dsd.wishlists(year_int, professor, preference, uc_id)\
        VALUES({wishlist.year}, {wishlist.prof_id}, '{wishlist.preference}', {wishlist.uc_id});")
    db.commit()

    return wishlist

### --- ###

def classes_main_panel_info(cursor, params):
    '''Returns data used in UCs main panel'''

    if params.startswith("uc_acronym"):
        params += ", prof_acronym;"
    else:
        params += ", uc_acronym, prof_acronym;"

    cursor.execute(f"SELECT * FROM classes_main_panel_info ORDER BY {params}")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"data": [dict(zip(keys, vals)) for vals in result]}

def professors_main_panel_info(cursor, params, prof_ids):
    '''Returns data used in Profs main panel'''
    
    if prof_ids != "":
        prof_ids = f"WHERE `prof_id` IN {prof_ids}"

    cursor.execute(f"SELECT * FROM professors_main_panel_info {prof_ids} ORDER BY {params}")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"data": [dict(zip(keys, vals)) for vals in result]}

def get_prof_total_hours(cursor):
    '''Returns total hours assigned for each professor'''

    cursor.execute("SELECT * FROM prof_total_hours;")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"data": [dict(zip(keys, vals)) for vals in result]}

def assign_prof_to_class(connection, cursor, class_id, prof_id):
    '''Assigns a teacher to a class'''
    if prof_id == -1:
        prof_id = "NULL"

    cursor.execute(f"UPDATE dsd.classes SET prof_id = {prof_id} WHERE class_id = {class_id}")
    connection.commit()

    return {"response": f"{cursor.rowcount} record(s) affected"}

def update_prof_acronym(connection, cursor, prof_id, acronym):
    '''Updates teacher acronym'''

    cursor.execute(f"UPDATE dsd.professors SET acronym = {acronym} WHERE prof_id = {prof_id}")
    connection.commit()

    return {"response": f"{cursor.rowcount} record(s) affected"}

def validate_dsd(cursor, max_hours):
    '''Retrieves dsd warnings'''

    cursor.execute(f"CALL ValidateDsd({max_hours});")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"warnings": [dict(zip(keys, vals)) for vals in result]}

def export_dsd(cursor, file_type):
    '''Exports dsd as json/csv/xls'''

    cursor.execute(f"CALL ExportDsd();")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    json = {"data": [dict(zip(keys, vals)) for vals in result]}
    return write_dict_to_file(json, file_type)