const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const app = express(); //
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secret = 'askj123kokn123';

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}));

app.use(express.json()); // parsing our body data

mongoose.connect('mongodb+srv://pratyush:UXvb9acvWj3riX0W@cluster0.nk04w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {        
        const userDoc = await User.create({
            username, 
            password:bcrypt.hashSync(password, salt),
        });
        res.json(userDoc); // we defined requestData 
    } catch (error) {
        res.status(400).json(error);
    }
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password); // here we are comparing our password with the hased password we got from userDoc.
    //res.json(passOk)
    //res,json(userDoc)
    if (passOk){
        // logged in
        jwt.sign({username, id:userDoc._id}, secret, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token', token).json('ok');
        });
    } else {
        res.status(400).json('wrong credentials');
    }

});

// mongo DB password - UXvb9acvWj3riX0W Username - pratyush
// mongoDB connection string - mongodb+srv://pratyush:UXvb9acvWj3riX0W@cluster0.nk04w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.listen(4000);
