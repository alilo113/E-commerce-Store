const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    username:{
        type: String,
    },
    password:{
        type: String
    },
    email:{
        type: String
    }
})

const custumer = mongoose.model("user", customerSchema)
module.exports = custumer