const mongoose = require('mongoose');
require('dotenv').config();

//define and import mongodb
//const mongoUrl =  'mongodb://localhost:27017/hotels'
const mongoURL = 'mongodb+srv://aashitipatil02000:Ashiti@cluster0.flkhe5w.mongodb.net/'

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//get default connection
const db = mongoose.connection;//obj

//define event listenier
db.on('connected',() => {
    console.log('MongoDB connected');
});

db.on("error", (err) => {
    console.log("MongoDB connection error:",err);
});

db.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

//export database connection
module.exports=db;