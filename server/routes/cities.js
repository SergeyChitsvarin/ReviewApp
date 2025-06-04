const express = require("express")
const router = express.Router()

const cityData = {
  Calgary: { name: "Calgary", message: "This is Calgary" },
  Edmonton: { name: "Edmonton", message: "This is Edmonton" },
  Vancouver: { name: "Vancouver", message: "This is Vancouver" },
  Victoria: { name: "Victoria", message: "This is Victoria" },
  Saskatoon: { name: "Saskatoon", message: "This is Saskatoon" },
  Regina: { name: "Regina", message: "This is Regina" },
  Winnipeg: { name: "Winnipeg", message: "This is Winnipeg" },
  Toronto: { name: "Toronto", message: "This is Toronto" },
  Ottawa: { name: "Ottawa", message: "This is Ottawa" },
  Montreal: { name: "Montreal", message: "This is Montreal" },
  Halifax: { name: "Halifax", message: "This is Halifax" }
};

router.get("/:cityName", (req, res) => {
    const {cityName} = req.params;
    const data = cityData[cityName];

    res.json(data);
});

module.exports = router