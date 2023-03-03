import express from 'express'
import user from "./userroutes.js"
import bodyParser from 'body-parser';
import cors from "cors"

const app = express();
app.use(cors());
// const corsConfig = {
//     credentials: true,
//     origin: true,
// };
// app.use(cors(corsConfig));

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
 app.use("/user",user)

export default app