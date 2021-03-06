const mongoose = require('mongoose');
const Dishes = require("./models/dishes");

const url = "mongodb://localhost:27017/conFusion";

const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log("Connected correctly to server");
    
    Dishes.create({
        name: "Shivansh",
        description:"Developers Name"
    })
    .then((dish)=>{
        console.log("Dishes\t",dish);
        return Dishes.find({}).exec();
    })
    .then((dishes)=>{
        console.log("All dishes\t",dishes);
        return Dishes.deleteMany({});
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err);
    })
})
