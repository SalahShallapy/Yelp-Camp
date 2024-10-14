const Review = require('../models/review');
const Campground = require('../models/campground');

module.exports.createReview = async (req, res ) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await campground.save();
    await review.save();
    req.flash('success' , 'Successfully Created A New Review');
    res.redirect(`/campgrounds/${campground._id}`);
}

module.exports.deleteReview =  async (req,res) => {
    const {id , reviewId} = req.params;
    await Campground.findByIdAndUpdate(id , {$pull : {id , reviewId }}) ;
    await Review.findByIdAndDelete(reviewId);
    req.flash('success' , 'Successfully Deleted Review');
    res.redirect(`/campgrounds/${id}`);
}