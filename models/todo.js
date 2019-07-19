let mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
    todo:{
        type: String,
        required: "Todo Cannot be Blank!"
    },
    completed:{
        type: Boolean,
        default: false
    },
    createdDate:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Todo", todoSchema);