const express = require("express");
const router = express.Router();
const {
  getTables,
} = require("../controllers/spacesController");

router.get("/", async (req, res) => {
  const tables = await getTables();
  res.send(tables);
});

module.exports = router;
