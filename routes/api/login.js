const express = require('express');
const User = require('../../models/login');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config({ path: '../../.env' });
const bcrypt = require('bcrypt');

const route = express.Router();


route.get('/', (req, res) => { 
    res.render('login', { title: "login" , style : 'login', errors : []});
});

route.post('/',express.urlencoded({ extended: true }), async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {

        const user = await User.findOne({ email });
        console.log(user, "  user");
        if (user) {
            if(user.password === password){
                res.render('map')
            }
            else{
                const obj = { password: ' Incorrect password' };
                throw obj;
            }
        }
        else {
            const obj = { email: 'incorrect Email-Id and password' };
            throw obj;
        }
        
    } catch (err) {
        res.status(400).json({ errors: Object.values(err) });
    }
});

module.exports = route;