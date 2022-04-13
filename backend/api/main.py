import mysql.connector, crud
from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse

app = FastAPI()

### add CORS headers ###
origins = ["http://172.18.0.2:3000"] # "*" -> all origins

app.add_middleware(CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

### DB connection ###
db = mysql.connector.connect(
    host="172.18.0.4",
    user="user",
    passwd="password",
    database="dsd"
)

cursor = db.cursor()

### API methods ###

@app.get("/")
def read_root():
    return RedirectResponse(url='/docs')

@app.get("/classes/")
def get_classes(prof_id: Optional[int] = "NULL", uc: Optional[int]= "NULL", year: Optional[int] = "NULL"):
    '''Returns all classes (or sorted by prof, uc, year)'''
    return crud.get_classes(cursor, prof_id, uc, year)