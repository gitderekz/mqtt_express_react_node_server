// const {temperature,humidity,pressure,altitude} = req.body
const mqtt = require("mqtt");


const initClient = ()=> {
    return mqtt.connect(
        'mqtt://38.242.138.208:1883',
        {
        username:'derek',
        password:'password'
        }
    );
} 
    
const fetch_current_weather = (req,res) =>{
    const client = initClient();
    client.on("connect", () => {
        client.subscribe("irrigation/current_weather", (err) => {
            // if (!err) {
            //     client.publish("test/counter", 'weather');
            // }
        });
    });

    client.on("message", (topic, message) => {
        client.end();
        res.status(200).json({
            name: process.env.NAME,
            dashboardTitle: process.env.DASHBOARD_TITLE,
            message: JSON.parse(message),
            // message: resultArray,
        });
    });

}
const pub_sub = (req,res)=>{
    const client = initClient();
    client.on("connect", () => {
        client.subscribe("irrigation/weather", (err) => {
        // client.subscribe("test/counter", (err) => {
            if (!err) {
                client.publish("test/counter", 'weat,weather');
            }
        });
    });

    client.on("message", (topic, message) => {
        // // message is Buffer
        // console.log(message.toString());
        client.end();
        
        // // Convert the Buffer data to a JavaScript array
        // const x = JSON.parse(message)
        // // res.send(x[0])

        // // Specify the order of properties
        // const order = ["id", "temperature", "humidity", "rain", "soil_moisture", "created_at"];
        // // Convert the object to an array based on the specified order
        // const resultArray = order.map(property => x[0][property]);
        // // console.log(resultArray);
        // // res.send(resultArray)

        res.status(200).json({
            name: process.env.NAME,
            dashboardTitle: process.env.DASHBOARD_TITLE,
            message: JSON.parse(message),
            // message: resultArray,
        });

        // // res.render("./dashboard.ejs", {
        // //     name: process.env.NAME,
        // //     dashboardTitle: process.env.DASHBOARD_TITLE,
        // //     data: message.toString(),
        // // });
        // ;
    });
}

const pub_sub_save = ()=> {}

module.exports = {pub_sub,fetch_current_weather,pub_sub_save}