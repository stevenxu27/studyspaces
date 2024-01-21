const MongoClient = require("mongodb").MongoClient;
const url = 'mongodb+srv://Admin:Password@cluster0.96m35uk.mongodb.net/';

const client = new MongoClient(url);

const getAllValuesFromDb = async () => {
  const getAll = async () => {
    try {
      await client.connect();
      const database = client.db("studyspaces");
      const tablesCollection = database.collection("tables");

      const query = {};
      const projection = { _id: 1, last_occupied: 1, table_id: 1, location: 1, battery: 1, popularity: 1, total_users: 1, is_full: 1 };
      const cursor = tablesCollection.find(query).project(projection);
      const result = await cursor.toArray();
      return result;
    } finally {
      await client.close();
    }
  };
  const result = await getAll();
  return result;
};

// const getAllValuesFromLocationDb = async (targetLocation) => {
//   const getAll = async () => {
//     try {
//       await client.connect();
//       const database = client.db("studyspaces");
//       const tablesCollection = database.collection("tables");

//       // Update the query to include the target location
//       const query = { location: targetLocation };
//       const projection = { _id: 1, last_occupied: 1, table_id: 1, location: 1, battery: 1, popularity: 1, total_users: 1, is_full: 1 };
//       const cursor = tablesCollection.find(query).project(projection);
//       const result = await cursor.toArray();
//       return result;
//     } finally {
//       await client.close();
//     }
//   };
//   const result = await getAll();
//   return result;
// };

module.exports = {
  getAllValuesFromDb,
};
