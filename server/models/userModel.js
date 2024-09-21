const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    popupsShown: [
        {
            title: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true
            },
            action:{
                type: String,
                enum: ['opened', 'closed'],
                require: true
            }
        }
    ]
})

module.exports = mongoose.model("User", userSchema);