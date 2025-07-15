const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        fullName : {
                type : String,
                required : true
        }
},{
        timestamps : true
})