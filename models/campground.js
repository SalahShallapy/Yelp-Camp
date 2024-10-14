const { ref, string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const Review = require('./review');

const imageSchema = new Schema ({
    url : String ,
    filename : String
});

const opts = {toJSON :{virtuals : true}};

imageSchema.virtual('thumbnail').get(function() {
    return this.url.replace('/upload' , '/upload/w_200')
})

const campgroundSchema = new Schema ({
    title : String,
    images : [imageSchema] , 
    geometry : {
        type : {
            type : String ,
            enum : ['Point'] , 
        } ,
        coordinates : {
            type : [Number] ,
        } 
    } , 
    price : Number ,
    description : String , 
    location : String ,
    author : {
        type : Schema.Types.ObjectId ,
        ref : 'User'
    } ,
    reviews : [
        {
            type : Schema.Types.ObjectId ,
            ref : 'Review'
        }
    ]
} , opts);


campgroundSchema.virtual('properties.popUpMarkup').get(function() {
    return `<strong><a href=/campgrounds/${this._id}>${this.title}</a></strong><p>${this.description.substring(0,30)}...</p>`
})

    campgroundSchema.post('findOneAndDelete' , async function (doc) {
        if(doc){
            await Review.deleteMany({
                _id : {
                    $in : doc.reviews
                }
            })
        }
    })

module.exports = mongoose.model('campground' ,campgroundSchema);
