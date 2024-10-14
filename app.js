if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Campground = require('./models/campground');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const { nextTick, title } = require('process');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const { descriptors } = require('./seeds/seedHelpers');
const {campgroundSchema , reveiwSchema} = require('./schemas');
const Review = require('./models/review');
const campground = require('./models/campground');
const userRoutes = require('./routes/users')
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');
const session = require('express-session');
const flash = require('connect-flash'); 
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user');
const mongoSanitize = require('express-mongo-sanitize');
const dbUrl = process.env.DB_URL ;
// 'mongodb://127.0.0.1:27017/yelp-camp'
// const uri = "mongodb+srv://firstUser:NndJdPAa1RgAf9N7@cluster0.a72hg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
const db = mongoose.connection ;
db.on("error" , console.error.bind(console, "CONNECTION ERROR !!!"));
db.once("open" , ()=> {
    console.log('DATABASE CONNECTED');
})

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded({extended : true }));
app.use(methodOverride('_method'));
app.engine('ejs' , ejsMate);
app.use(mongoSanitize());

const sessionConfig = {
    name : 'session',
    secret: 'thisismytopsecret' ,
    saveUninitialized:true ,
    resave:false ,
    cookies : {
        httpOnly : true ,
        // secure : true , 
        expires : Date.now() + 1000 * 60 * 60 * 24 * 7 ,
        maxAge : 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use( (req , res , next) => {
    // console.log(req.session);
    res.locals.url = `/campgrounds${req.url}`
    res.locals.currentUser = req.user ;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/' , userRoutes);
app.use('/campgrounds' , campgroundRoutes);
app.use('/campgrounds/:id/reviews' , reviewRoutes);
app.use(express.static(path.join(__dirname,'public')));




const validateCampground = (req ,res , next) => {
    const {error} = campgroundSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg,400)
    }else {
        next();
    }
}

const validateReview = (req ,res , next) => {
    const {error} = reveiwSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg,400)
    }else {
        next();
    }
}

app.get('/',(req , res) => {
    res.render('home');
});

app.all('*' , (req ,res ,next) => {
    next(new ExpressError('PAGE NOT FOUND' , 404));
})
app.use((err , req ,res , next) => {
    const { statusCode = 500 } = err ;
    if (!err.message) err.message = "Error !"
    res.status(statusCode).render('error' , {err}) ;
});
app.listen(3000 , () => {
    console.log('LISTENING AT PORT 3000');
});