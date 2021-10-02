const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
        minlength:[6, 'Minimum password length should be 6 characters'],
        hide:true
    },
    email: {
        type: String,
        required: [true, 'please enter your email'],
        unique: true,
        lowercase: [true, 'email should be lowercase']
    },
    data: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);