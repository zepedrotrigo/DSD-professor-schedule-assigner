import mysql.connector, traceback
import crud
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
connection = None
try:
    connection = mysql.connector.connect(host="172.18.0.4", user="user", passwd="password", database="dsd")
except mysql.connector.Error as e:
    if e.errno == mysql.connector.errorcode.ER_ACCESS_DENIED_ERROR:
        print("Incorrect credentials!")
    elif e.errno == mysql.connector.errorcode.ER_BAD_DV_ERROR:
        print("Database does not exist!")
    else:
        print(e)
        traceback.print_exc()

    exit()

def reset_cursor():
    connection.close()
    connection.reconnect()


### API methods ###

@app.get("/")
def read_root():
    return RedirectResponse(url='/docs')

@app.get("/classes/")
def get_classes(prof_id: Optional[int] = -1, uc: Optional[int]= -1, year: Optional[int] = -1):
    '''Returns all classes (or sorted by prof, uc, year)'''
    reset_cursor()
    with connection.cursor() as cursor:
        return crud.get_classes(cursor, prof_id, uc, year)