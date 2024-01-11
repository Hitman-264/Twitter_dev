const express = require('express');
const connect = require('./config/database');

const app = express();

const TweetService = require('./services/tweet_service');
const tweeto = new TweetService();

app.listen(3000, async ()=>{
    console.log("Server started");
    await connect();
    console.log("Mongodb connected");


    const tweet = await tweeto.create({
        content :'Is #tweets working?'
    }) 
    console.log(tweet);
})