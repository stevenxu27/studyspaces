const { getAllValuesFromDb } = require("../services/dbService")

const getTables = async () => {
  const values = await getAllValuesFromDb()
  return values
}

module.exports = { getTables }