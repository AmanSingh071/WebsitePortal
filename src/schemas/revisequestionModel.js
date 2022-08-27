const mongoose = require("mongoose");
// create an schema
var userschema = new mongoose.Schema({
    question: String,
    ans: String,
    articleno:Number,
    
  
            

        });
var reviseconceptmodel=mongoose.model('reviseConcept',userschema);
module.exports = reviseconceptmodel