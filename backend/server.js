const express = require("express");
const app = express();
require("dotenv").config();
const port = 5000;

const authRouter = require("./routes/auth");

app.use(authRouter);
app.listen(port, () => console.log(`Server started on port ${port}`));
