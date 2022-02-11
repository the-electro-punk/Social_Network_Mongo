const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test_collection";
mongoose.connect( MONGODB_URI);

const db=require("./MongoConnections")


// this is the data that will go into the database
const data = [
{
    postTitle:"Great Gatsby",
    createdBy: "F. Scott Fitzgerald",
    content: "Rich guy pines for rich woman at greenlit dock"
},
{
    postTitle: "The Jungle Book",
    createdBy: "Rudyard Kipling",
    content:"Young native boy wanders from one weird experience with animals to another"
}]

// this posts the data to the database in server
db.create(data)
.then(res=>{
    console.log("let's create")
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

// if mulptile models used, would have to type db.Posts.create(data)
// Posts is what I named the model schema in MongoConnections