const express = require('express');
const User = require('../../models/register');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config({ path: '../../.env' });
const bcrypt = require('bcrypt');

const route = express.Router();


route.get('/', (req, res) => { 
    res.render('login', { title: "login" , style : 'login', errors : []});
});

route.post('/',express.json(), async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const user = await User.findOne({ email });
        if (user) {
            const auth = await bcrypt.compare(password, user.password);
            if (!auth) {
                throw ({password: 'Incorrect password'});
            }
            else{
                res.status(201).json({user:"Login Success", redirect:"/maps"});
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