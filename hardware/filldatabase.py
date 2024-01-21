#A99 = Set as always green
#A00-A05 =  6 Round tables 
#A06-A13 = 8 Chapman rect tables
#A14 = Biggest test table
#A15-A24= 10 outside ring tables
#A25-A50 = 26 central library tables

# Generate table IDs from 'A00' to 'A19'
table_ids = [f'A{i:02d}' for i in range(51)]

# Print the generated table IDs
#print(table_ids)

from database import add_database
from database import edit_database

location = "IKB"
is_full = True

for id in table_ids:
    add_database(id, location, is_full)

add_database("A99", location, False)

#table_id = "A00"
#location = "IKB"
#is_full = False

#edit_database(table_id, location, is_full)
