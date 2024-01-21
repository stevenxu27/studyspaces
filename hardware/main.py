from database import add_database
from database import edit_database

from motiondetector import is_motion

from time import sleep

# Create preset 20 tables with somewhat randomized
# Generate table IDs from 'A00' to 'A19'
#table_ids = [f'A{i:02d}' for i in range(20)]
#for id in table_ids:
#   add_database(id, 'IKB', False)

#edit database entries
# edit_database("A01", "IKB", False)

def check_table(table_id):
    location = "IKB"
    is_full = is_motion(table_id)
    edit_database(table_id, location, is_full)
    if is_full:
        print("Table " + table_id + " is Full")
    else:
        print("Table " + table_id + " is Empty")


#table_id remains static for each raspberry pi
table_id = "A00"
counter = 0

while True:
    check_table(table_id)
    counter+=1
    print("This program has ran " + counter + " times")
    sleep(20)