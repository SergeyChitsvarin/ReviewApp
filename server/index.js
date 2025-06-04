const express = require('express');
const app = express();
const cityRouter = require('./routes/cities');
const cors = require('cors');

// mongodb+srv://DBAdmin:<db_password>@reviewapp.nytiv8m.mongodb.net/?retryWrites=true&w=majority&appName=ReviewApp
// Setup for db connection

app.use(cors());

app.use("/cities", cityRouter);



app.listen(5000, () => {
    console.log("Server started on port 5000!");
});

