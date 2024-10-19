const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const app = express(); //

const salt = bcrypt.genSaltSync(10);

app.use(cors());

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

// mongo DB password - UXvb9acvWj3riX0W Username - pratyush
// mongoDB connection string - mongodb+srv://pratyush:UXvb9acvWj3riX0W@cluster0.nk04w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.listen(4000);
