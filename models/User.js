const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: false,
        default: 'Add bio here'
    },
    joined: {
        type: Date,
        default: Date.now
    },
    likedPosts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'posts',
        default: []
    },
})

module.exports = mongoose.model('User', UserSchema);