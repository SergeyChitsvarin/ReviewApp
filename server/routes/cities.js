const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const connectToDatabase = require("../connect.cjs");

router.get("/:cityName", async (req, res) => {
  const { cityName } = req.params;

  try {
    const db = await connectToDatabase();
    const city = await db.collection("Cities").findOne({ name: cityName });

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    res.json(city);
  } catch (e) {
    console.error("Error fetching city:", e.message);
    res.status(500).json({ message: "Server error fetching city data" });
  }
});

router.post("/:cityName/reviews", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Missing token" });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const { cityName } = req.params;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Review text is required" });
    }

    const db = await connectToDatabase();
    const citiesCollection = db.collection("Cities");

    const result = await citiesCollection.updateOne(
      { name: cityName },
      {
        $push: {
          reviews: {
            name: decoded.firstName,
            text,
          },
        },
      }
    );

    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "City not found or review not added" });
    }

    res.status(200).json({ message: "Review added successfully" });
  } catch (err) {
    console.error("Error adding review:", err);
    res.status(403).json({ message: "Invalid or expired token" });
  }
});

module.exports = router;