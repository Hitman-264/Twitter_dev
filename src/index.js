import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';
import passport from 'passport';
import apiRoutes from './routes/index.js';
import {passportAuth} from './config/jwt_middleware.js'
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());

passportAuth(passport);
app.use('/api', apiRoutes);


app.listen(5000, async ()=>{
    console.log("Server started at PORT 5000");
    await connect();
    console.log("Mongodb connected");
   

})