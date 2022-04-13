def get_classes(cursor, prof_id, uc_id, year):
    '''Returns all classes (allows combined filters: id, uc, year)'''
    
    cursor.execute(f"CALL FilterClasses({prof_id},{uc_id},{year});")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"classes": [dict(zip(keys, vals)) for vals in result]}

def get_professors(cursor, prof_id, nmec, acronym, name, rank):
    '''Returns all professors (allows combined filters: id, nmec, acronym, name, rank)'''

    cursor.execute(f"CALL FilterProfessors({prof_id}, {nmec}, {acronym}, {name}, {rank});")
    result = cursor.fetchall()
    keys = [i[0] for i in cursor.description]

    return {"professors": [dict(zip(keys, vals)) for vals in result]}