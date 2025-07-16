const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        fullName : {
                type : String,
                trim : true,
                required : true
        }
},{
        timestamps : true
})