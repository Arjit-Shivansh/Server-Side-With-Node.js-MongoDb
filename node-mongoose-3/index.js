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
        return Dishes.findByIdAndUpdate(dish._id,{$set:{description:'Updated Developer Name'}},{new     : true}).exec();
    })
    .then((dish)=>{
        console.log("All dishes\t",dish);
        dish.comments.push({
                rating:5,
                comment:"I\'m getting a sinking feeling",
                author:'Paulo Ceolo'
        });
        return dish.save();
    })
    .then((dish)=>{
        console.log(dish);    
        return Dishes.deleteMany({});
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err);
    })
})
