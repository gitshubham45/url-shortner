const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dotenv = require('dotenv');
const ShortUrl = require('./models/shortUrl');

dotenv.config();

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri);

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    const shortUrls = 
    res.render("index");
});

app.post("/shortUrls", async (req, res) =>{
    console.log(req.body.fullUrl);
    await ShortUrl.create({full : req.body.fullUrl});
    res.redirect('/');
});

app.listen(process.env.PORT || 3000);

