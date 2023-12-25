const express = require('express');
const connect = require('./config/database');
const Comment = require('./models/comment');
const app = express();
const TweetRepository = require('./repository/tweet_repository');
const tweeto = new TweetRepository();
app.listen(3000, async ()=>{
    console.log("Server started");
    await connect();
    console.log("Mongodb connected");
    // const tweet = await tweeto.create({
    //     content:'This is my third tweeet',
        
    // });
    // console.log(typeof tweet);

    // const tweet = await tweeto.update('65893b5740b021689f3f8c6e',{
    //     content : 'Tweet regarding Rohit',
    // });
    // console.log(tweet);
    // const tweet = await tweeto.create({
    //     content : 'Tweet with a new comment'
    // });
    // const comm = await Comment.create({
    //     content : 'new comment added'
    // });

    const tweet = await tweeto.getwithComments('658941a766d45430542a2e75');
    console.log(tweet);
    // tweet.comments.push(comm);
    // await tweet.save();
    // console.log(tweet);
})