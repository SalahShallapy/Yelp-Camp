const mongoose = require('mongoose');
const cities = require('./Cities');
const { places ,descriptors } = require('./seedHelpers') ;
const campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
const db = mongoose.connection ;
db.on("error" , console.error.bind(console, "CONNECTION ERROR !!!"));
db.once("open" , ()=> {
    console.log('DATABASE CONNECTED');
})

const sample = (array) =>  array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await campground.deleteMany({});
    for (let i = 0 ; i < 200 ; i++) {
        const random1000 = Math.floor(Math.random() * 1000 );
        const price = Math.floor(Math.random() * 20 ) + 10 ;

        // const response = await fetch('https://api.unsplash.com/photos/random?query=campfire&client_id=JUpPlnsUgbiPWMsjl3k0Yh5uN32q2hSn72Wt2YhqS8k');
        // const data = await response.json();
        // const imageUrl = data.urls; 


        const camp = new campground({
            // YOUR USER ID /
            author : '66dc652d00d0de1f371acb2f' ,
            location : `${cities[random1000].city} , ${cities[random1000].state}` ,
            title : `${sample(descriptors)} ${sample(places)}` ,
            images :  [
                {
                  url: 'https://res.cloudinary.com/dzqlng9np/image/upload/v1725814728/YelpCamp/g2sln1hwvrngveltsoew.jpg',
                  filename: 'YelpCamp/g2sln1hwvrngveltsoew',
                },
                {
                  url: 'https://res.cloudinary.com/dzqlng9np/image/upload/v1725814728/YelpCamp/ka86uxrrpvd4duxbdsqi.jpg',
                  filename: 'YelpCamp/ka86uxrrpvd4duxbdsqi',
                }
              ] , 
              geometry:{
                type: "Point",
                coordinates :[
                  cities[random1000].longitude,
                  cities[random1000].latitude
                ]
              } ,
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores mollitia ipsum sequi! Quis cumque commodi reiciendis soluta quasi nam quae, facere blanditiis, expedita, veniam a officiis tempore ab! Autem, natus.' ,
            price
        }) 
        await camp.save();
    }
}
seedDB().then( ()=> {
    mongoose.connection.close();
})