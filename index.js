const express = require('express')
const bodyParser = require("body-parser")

//routes
const dashboardRouter = require("./modules/dashboard/dashboard.routes");

const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json());
// app.use(bodyParser.text({ type: "/" }));

// load dotenv to read environment variables
require("dotenv").config();
// template view engine
app.set("view engine", "ejs");

app.use("/dashboard",dashboardRouter)

app.get("/mqttConnDetails", (req, res) => {
  res.send(
    JSON.stringify({
      mqttServer: process.env.MQTT_BROKER,
      mqttTopic: process.env.MQTT_TOPIC,
    })
  );
});

app.get('/',(req,res)=>{
    console.log('imefika');
    res.json({"mikoa":["kilimanjaro","arusha","manyara"]})
})

app.get('/api',(req,res)=>{
    res.json({"mikoa":["kilimanjaro","arusha","manyara"]})
})

app.listen(5000, ()=>{
    console.log('Server started at port: 5000')
})