const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require("./operations");


const url = "mongodb://localhost:27017/";
const dbname = "conFusion";

mongoClient.connect(url)
    .then((client) => {

    //assert.equal(err,null);

    console.log("Connected correctly to server");

    const db = client.db(dbname);

    return dboper.insertDocument(db,{name:"shivansh",description:"First-Name"},'dishes')

    .then((result)=>{
        console.log("Insert document : \n", result.ops);

        return dboper.findDocument(db,'dishes')
    })
    .then((docs)=>{
        console.log('Found Documents: \n',docs);

        return dboper.updateDocument(db,{name: "shivansh"},{description:"Second-Name"},'dishes')
    })
    .then((result)=>{
        console.log("Updated documents : ",result.result);

        return dboper.findDocument(db,'dishes')
    })            
    .then((docs)=>{
        console.log('Found Documents: \n',docs);

        return db.dropCollection('dishes')
    })                
    .then((result)=>{
            console.log("Dropped collection : ",result);
            return client.close();
    })
    .catch(err => console.error(err));
})
.catch(err => console.error(err));