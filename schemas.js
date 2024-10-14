const Basejoi = require('joi'); 
const sanitizeHTML = require('sanitize-html');

const extention = (joi) => ({
    type : 'string' ,
    base : joi.string(),
    messages: {
        'string.escapeHTML' : '{{#label}} Must not include HTML!'
    },
    rules : {
        escapeHTML : {
            validate(value,helpers) {
                const clean = sanitizeHTML(value, {
                    allowedTags:[],
                    allowedAttributes : {},
                });
                if(clean !== value ) return helpers.error('string.escapeHTML' , {value})
                return clean ;
            }
        }
    }
})

const joi = Basejoi.extend(extention);

module.exports.campgroundSchema = joi.object({
    campground: joi.object({
        title : joi.string().required().escapeHTML(),
        // image : joi.string().required(),
        location : joi.string().required().escapeHTML(),
        description : joi.string().required().escapeHTML(),
        price : joi.number().required().min(0),
    }).required(),
    deleteImages : joi.array()
});

module.exports.reveiwSchema = joi.object({
    review: joi.object({
        rating : joi.number().required().min(1).max(5) ,
        body : joi.string().required().escapeHTML()
    }).required()
});