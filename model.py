import sqlite3

DB = None
CONN = None

def connect_to_db():
    global DB, CONN
    CONN = sqlite3.connect("database.db")
    DB = CONN.cursor()

def delete_item(item):
    query = "DELETE FROM todo_items WHERE task = ?"
    DB.execute(query, (item,))
    CONN.commit()

connect_to_db()
delete_item("Test")
