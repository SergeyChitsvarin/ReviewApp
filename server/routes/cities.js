const express = require("express");
const router = express.Router();
const connectToDatabase = require("../connect.cjs");

router.get("/:cityName", async (req, res) => {
  const { cityName } = req.params;

  try {
    const db = await connectToDatabase();
    const city = await db.collection("cities").findOne({ name: cityName });

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    res.json(city);
  } catch (e) {
    console.error("Error fetching city:", e.message);
    res.status(500).json({ message: "Server error fetching city data" });
  }
});

module.exports = router;