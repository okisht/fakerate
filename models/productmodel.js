const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create first model schema

const productSchema = new Schema({

    imgUrl: {
        type: String,
        required: [true,'Name field is required']
    },

    upvotes:{
        type: Number
    },

    downvotes:{
        type: Number
    },

    wtb:{
        type: String
    },

    productid: {
        type: String
    }

});

const FirstModel = mongoose.model('model', productSchema);

module.exports = FirstModel; 