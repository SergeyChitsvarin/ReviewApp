const express = require('express');
const app = express();
const cityRouter = require('./routes/cities');
const userRouter = require('./routes/users');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use("/cities", cityRouter);

app.use('/users', userRouter);

app.listen(5000, () => {
    console.log("Server started on port 5000!");
});

