// import { express } from "express";
const express = require('express');
//import { cors } from "cors";
const cors = require("cors");
import 'dotenv/config';
import logger from './utils/logger';
import { connect } from './utils/database.connection';

const app = express();
const PORT = process.env.PORT || "9090";

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.get("/", (req, res, next) => {
    res.send("<h2>test 1 </h2>");
    next();
});

app.listen(PORT, () => {
    logger.info(`🚀 server is up an running on PORT ${ PORT } `);
    connect();

});

const requestformrRouter = require("./routes/requestfoms");
app.use("/requestform", requestformrRouter);

const Categoryrouter = require("./routes/Categories");
app.use("/Category", Categoryrouter);


const SubCategoryrouter = require("./routes/Subcategories");
app.use("/SubCategory", SubCategoryrouter);