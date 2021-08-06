const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date().getDate()
    },
    content: {
        type: String,
        required: true
    },
    edited: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Post', PostSchema);