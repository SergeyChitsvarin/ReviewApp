const express = require('express');
const app = express();
const cityRouter = require('./routes/cities');
const cors = require('cors');

app.use("/cities", cityRouter);
app.use(cors());


app.listen(5000, () => {
    console.log("Server started on port 5000!");
});

