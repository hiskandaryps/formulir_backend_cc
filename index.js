const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Import routes
app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
