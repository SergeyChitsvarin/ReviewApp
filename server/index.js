const express = require('express');
const app = express();
const cityRouter = require('./routes/cities');

app.use("/cities", cityRouter)

app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "UserTwo", "userThree"] });
});

app.listen(5000, () => {
    console.log("Server started on port 5000!");
});

