require('dotenv').config();
const express = require('express');
const app = express();
const databaseConnect = require('./database');
const cors = require('cors');
const cookieParser = require('cookie-parser');

databaseConnect();

const authRouter = require('./routes/auth');
const authCompare = require('./routes/compare');

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(authRouter);
app.use(authCompare);

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
