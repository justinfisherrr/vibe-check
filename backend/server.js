const express = require("express");
const app = express();
const databaseConnect = require("./database");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const authRouter = require("./routes/auth");
databaseConnect();
const authCompare = require("./routes/compare");

app.use(authRouter);
app.use(authCompare);
app.use(cors());
app.use(cookieParser());
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
