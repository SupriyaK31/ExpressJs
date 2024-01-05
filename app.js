const express=require('express');
const bodyParser=require('body-parser');


const app=express();
app.use(bodyParser.urlencoded({ extended: true }));

const loginRoute=require('./routes/login');
const chatRoute=require('./routes/chat');

app.use(loginRoute);
app.use(chatRoute);

app.listen(3000);
