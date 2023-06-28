const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength:20
    },
    completed: {
        type: Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',TaskSchema)