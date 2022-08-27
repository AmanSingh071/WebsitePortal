const mongoose = require("mongoose");
// create an schema
var userSchema = new mongoose.Schema({
    title: String,
    topic: String,
    subtopic:String,
    gs:String,
    articleNo:Number,
    article:String,
    date:String
            

        });
var userModel=mongoose.model('currentAffair',userSchema);
module.exports = userModel