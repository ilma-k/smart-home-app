//for getting data from arduino
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const express = require("express");
const bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.json({ type: "application/json" }));
app.use(bodyparser.urlencoded({ extended: true }));

var com = new SerialPort({ path: "COM4", baudRate: 9600 });

com.on("open", () => {
  console.log("com is connected!!!");
});

app.listen(3000, () => {
  console.log("Express server is runnig at port no : 3000");
});

//firebase
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./smart-home-app-41725-5809c6fa3d1f.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL:
    "https://smart-home-app-41725-default-rtdb.europe-west1.firebasedatabase.app",
});

// As an admin, the app has access to read and write all data, regardless of Security Rules

//For the motion sensor :
var db = admin.database();
var ref = db.ref("SmartHomeApp");

var dataFromSensors;

const parser = com.pipe(new ReadlineParser({ delimiter: "\n" }));
parser.on("data", function (data) {
  dataFromSensors = JSON.parse(data);

  const motionRef = ref.child("motion");
  const tempRef = ref.child("temperature");
  const lightRef = ref.child("lightState");

  motionRef.set({
    distance: {
      distance: dataFromSensors.distance,
    },
  });

  tempRef.set({
    temperature: {
      temperature: dataFromSensors.temperature,
    },
  });

  lightRef.set({
    lightState: {
      state: dataFromSensors.light,
    },
  });
});
