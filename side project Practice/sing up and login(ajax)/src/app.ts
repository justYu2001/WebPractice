import express from 'express';
import path from 'path';
import bluebird from 'bluebird';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import {MONGODB_URI} from './util/secrets';
import * as homeController from './controllers/home';
import * as userController from './controllers/user';

const app =express();

const mongourl=MONGODB_URI;
mongoose.Promise=bluebird;

mongoose.connect(mongourl,{ useNewUrlParser: true ,useCreateIndex:true, useUnifiedTopology:true})
.catch(err=>{
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
});

app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,'../views'));
app.set('view engine','pug');

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname+'/public')));

app.get('/',homeController.index);
app.get('/singin',userController.getSingin);
app.post('/singin',userController.postSingin);
app.get('/singup',userController.getSingup);
app.post('/singup',userController.postSingup);

export default app