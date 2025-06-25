const PORT = 5000;
const express = require('express');
const app = express();
const cityRouter = require('./routes/cities');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true                
}));

app.use(express.json());

app.use("/cities", cityRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

