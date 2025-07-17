const mongoose = require('mongoose');

const connectDb = async () => {
        try {
               await  mongoose.connect(process.env.MONGO_URI)
               console.log("Db Connected")
        } catch (error) {
                console.log(`db error : ${error}`)
        }
}

module.exports = connectDb