const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        fullName : {
                type : String,
                trim : true,
                required : true
        },
        userName : {
                type : String,
                trim : true,
                required : true,
                unique : true
        },
        email : {
                type : String,
                trim : true,
                required : true,
                unique : true
        },
        password : {
                type : String,
                trim : true,
                required : true,
        },
        profilePic : {
                type : String,
        },
        post : [
                {
                        type : mongoose.Schema.Types.ObjectId,
                        ref : "User"
                }
        ],
        story : [
                {
                        type : mongoose.Schema.Types.ObjectId,
                        ref : "Story"   
                }
        ],
        reels : [
                {
                        type : mongoose.Schema.Types.ObjectId,
                        ref : "Reels"   
                }
        ],
        followers :  [
                {
                        type : mongoose.Schema.Types.ObjectId,
                        ref : "User"   
                }
        ],
        following :  [
                {
                        type : mongoose.Schema.Types.ObjectId,
                        ref : "User"   
                }
        ],

},{
        timestamps : true
})

const User = mongoose.model("User",userSchema)
module.exports = User