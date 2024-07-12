const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")

const custumerSchema = new mongoose.Schema({
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

custumerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

const custumer = mongoose.model("user", custumerSchema)
module.exports = custumer