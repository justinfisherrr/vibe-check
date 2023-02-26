const express = require("express");
const app = express();
const databaseConnect = require("./database");

require("dotenv").config();

const authRouter = require("./routes/auth");
databaseConnect();
const authCompare = require("./routes/compare");

app.use(authRouter);
app.use(authCompare);

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
