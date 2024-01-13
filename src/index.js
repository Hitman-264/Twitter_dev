import express from 'express';

import {connect} from './config/database.js';

const app = express();

// const TweetService = require('./services/tweet_service');
import TweetService from './services/tweet_service.js';
const tweeto = new TweetService();

app.listen(3000, async ()=>{
    console.log("Server started");
    await connect();
    console.log("Mongodb connected");


    const tweet = await tweeto.create({
        content :'#Nature is blessing ' 
    }) 
    console.log(tweet);
})