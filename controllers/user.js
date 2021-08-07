const User = require('../models/User');

exports.likePost = async (req, res) => {
     const postId = req.params.id;
     const userId = req.user.id;

     try {
         const user = await User.findById(userId);

        //  Check if user exists
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const userFields = {};
        userFields.likedPosts = user.likedPosts;
        userFields.likedPosts.push(postId);

        await User.findByIdAndUpdate(userId, {
            $set: userFields
        }, {
            new: true
        });

        res.status(200).json({ msg: 'Added post to liked posts' });
     } catch (err) {
         console.error(err.message);
         res.status(500).json({ msg: 'Server error' });
     }
}

exports.dislikePost = async (req, res) => {
    const postId = req.params.id;
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const userFields = {};
        userFields.dislikedPosts = user.dislikedPosts;
        userFields.dislikedPosts.push(postId);

        await User.findByIdAndUpdate(userId, {
            $set: userFields
        }, {
            new: true
        });

        res.status(200).json({ msg: 'Added post to disliked posts' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

exports.getLikedPosts = async (req, res) => {

}

exports.getDislikedPosts = async (req, res) => {

}