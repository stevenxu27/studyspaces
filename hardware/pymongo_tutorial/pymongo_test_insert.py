# Get the database using the method we defined in pymongo_test_insert file

# Import date class from datetime module
from datetime import datetime
#datetime.now()

# Randomize data for fun
import random

from pymongo_get_database import get_database
dbname = get_database()
collection_name = dbname["tables"]

now = datetime.now()

table_1 = {
    #"_id" : "U1IT00002",
    "last_updated" : now,
    "last_occupied" : now,
    "table_id" : "A0",
    "location" : "IKB",
    "battery" : 0.78,
    "popularity" : 0.1,
    "total_users" : 5,
    "is_empty" : True
}

table_2 = {
    #"_id" : "U1IT00002",
    "last_updated" : now,
    "last_occupied" : now,
    "table_id" : "A1",
    "location" : "IKB",
    "battery" : 0.78,
    "popularity" : 0.1,
    "total_users" : 5,
    "is_empty" : True
}

table_3 = {
    #"_id" : "U1IT00002",
    "last_updated" : now,
    "last_occupied" : now,
    "table_id" : "A2",
    "location" : "IKB",
    "battery" : 0.78,
    "popularity" : 0.1,
    "total_users" : 5,
    "is_empty" : True
}


collection_name.insert_many([table_1,table_2])

collection_name.insert_one(table_3)