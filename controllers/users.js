const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register')
}

module.exports.register = async(req ,res ,next ) => {
    try{
        const { email , username , password } = req.body;
        const user = new User({email , username});
        const registeredUser = await User.register(user , password);
        req.login(registeredUser , err => {
            if(err) return next(err);
            req.flash('success' , 'Welcome To Yelp-Camp')
            res.redirect('/campgrounds')
        })
    } catch (e) {
        await req.flash('error', e.message);
        res.redirect('register')
    }
}

module.exports.renderLogin =  (req, res) => {
    res.render('users/login')
}

module.exports.login = async (req, res) => {
    await req.flash('success' , 'Welcome Back !')
    const redirectUrl = req.session.returnTo || '/campgrounds';
    // delete req.session.returnTo;  // Clear session returnTo after redirection
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash('success', 'You are currently logged out');
      res.redirect('/campgrounds');
    });
  }