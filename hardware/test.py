# Generate table IDs from 'A00' to 'A19'
table_ids = [f'A{i:02d}' for i in range(20)]

# Print the generated table IDs
#print(table_ids)

from database import add_database
from database import edit_database


table_id = "A00"
location = "IKB"
is_full = False

edit_database(table_id, location, is_full)
