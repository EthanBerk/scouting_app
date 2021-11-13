const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    teamNumber:{
        type: Number,
        required: true
    },
    notes:{
        type: String
    }
})
module.exports = Team = mongoose.model('team', TeamSchema);