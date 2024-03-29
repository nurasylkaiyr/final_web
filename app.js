require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser'); 

const connectDB = require('./server/config/db');
    
const app = express();
const PORT = 3000 || process.env.PORT;

//Connect to DB 
connectDB();

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));

app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}`);
})