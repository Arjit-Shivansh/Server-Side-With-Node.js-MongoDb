const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require("./operations");
const url = "mongodb://localhost:27017/";
const dbname = "conFusion";

mongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);
    console.log("Connected correctly to server");
    const db = client.db(dbname);
    dboper.insertDocument(db,{name:"shivansh",description:"First-Name"},'dishes',(result)=>{
        console.log("Insert document : \n", result.ops);

        dboper.findDocument(db,'dishes',(docs)=>{
            console.log('Found Documents: \n',docs);

            dboper.updateDocument(db,{name: "shivansh"},{description:"Second-Name"},'dishes',(result)=>{
                console.log("Updated documents : ",result.result);   
                dboper.findDocument(db,'dishes',(doc)=>{
                    console.log('Found Documents: \n',docs);
                                                                                                                   //mongodb part 2
                    db.dropCollection('dishes',(result)=>{
                        console.log("Dropped collection : ",result);
                    });
                });      
            });
        });
    });
});