const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const skillsLimit = val => {
    return val.length < 3
}

const PetSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'name is required'],
        minlength: [3, 'name must be at least 3 characters'],
        unique: [true, 'name must be unique']
    },
    type: { 
        type: String,
        required: [true, 'type is required'],
        minlength: [3, 'type must be at least 3 characters']
    },
    description :{
        type: String,
        required: [true, 'description is required'],
        minlength: [3, 'description must be at least 3 characters'],
    },
    skills : [{
        type: String,
        validator: [skillsLimit, 'only add 3 skills max']
    }]
}, { timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetSchema);