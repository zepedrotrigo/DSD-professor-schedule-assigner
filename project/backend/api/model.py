from typing import Union
from pydantic import BaseModel

class Department(BaseModel):
    dept_id: int
    acronym: str
    dept_name: str
    dept_address: str 
    phone: str

class Professor(BaseModel):
    nmec: int
    email: str
    phone: str
    acronym: str
    prof_name: str
    prof_rank: str
    situation: str
    department_num: int

class Dsder(BaseModel):
    prof_id: int

class Course(BaseModel):
    course_id: int
    acronym: str
    course_name: str
    department_id: int
    director_id: int

class Uc(BaseModel):
    uc_id: int
    acronym: str
    uc_name: str
    students_estimate: int
    director: int

class Classe(BaseModel):
    year: int
    uc_num: int
    component: str
    class_hours: float
    prof_id: Union[int, str] = "NULL"
    availability_percent: int

class Wishlist(BaseModel):
    year: int
    prof_id: int
    preference: str
    uc_id: int