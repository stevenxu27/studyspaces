from pymongo import MongoClient

from dotenv import load_dotenv
import os

from datetime import datetime
#datetime.now()
import random

load_dotenv()

connection = os.getenv("mongodb_connection")

def get_database():
 
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = connection
 
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client = MongoClient(CONNECTION_STRING)

   # Create the database for our example (we will use the same database throughout the tutorial
   return client['studyspaces']
  
# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":   
  
   # Get the database
   dbname = get_database()


def add_database(is_empty):
    dbname = get_database()
    collection_name = dbname["tables"]

    #generate some shit
    now = datetime.now()
    random_battery = [random.randint(10, 99)/100 for _ in range(3)]
    random_pop = [random.randint(10, 99)/100 for _ in range(3)]
    random_totalusers = [random.randint(0, 99) for _ in range(3)]

    table_0 = {
        #"_id" : "U1IT00002",
        "last_updated" : now,
        "last_occupied" : now,
        "table_id" : "A0",
        "location" : "IKB",
        "battery" : random_battery[0],
        "popularity" : random_pop[0],
        "total_users" : random_totalusers[0],
        "is_empty" : is_empty
    }

    collection_name.insert_one(table_0)
    #collection_name.insert_many([table_1,table_2])
