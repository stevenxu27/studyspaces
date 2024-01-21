# Get the database using the method we defined in pymongo_test_insert file
from pandas import DataFrame

from pymongo_get_database import get_database
dbname = get_database()
 
# Retrieve a collection named "user_1_items" from database
collection_name = dbname["tables"]
 
item_details = collection_name.find()
for item in item_details:
    # This does not give a very readable output
    #print(item)
    
    # convert the dictionary objects to dataframe
    items_df = DataFrame(item_details)

    # see the magic
    print(items_df)
    