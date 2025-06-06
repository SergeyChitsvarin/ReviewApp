const express = require('express');
const app = express();
const cityRouter = require('./routes/cities');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use("/cities", cityRouter);

app.listen(5000, () => {
    console.log("Server started on port 5000!");
});

