import json

def get_classes(cursor, prof_id, uc, year):
    '''Returns all classes (or sorted by prof, uc, year)'''
    cursor.execute(f"CALL FilterClasses({prof_id},{uc},{year});")
    keys = [i[0] for i in cursor.description]

    return json.dumps({"classes": [dict(zip(keys, vals)) for vals in cursor]})