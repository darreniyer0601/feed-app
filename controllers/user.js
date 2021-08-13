const User = require("../models/User");

exports.likePost = async (req, res) => {
	const postId = req.params.id;
	const userId = req.user.id;

	try {
		const user = await User.findById(userId);

		//  Check if user exists
		if (!user) {
			return res.status(404).json({ msg: "User not found" });
		}

		// Check if post is already liked
		const idx = user.likedPosts.findIndex(post => post.toString() === postId);

		if (idx !== -1) {
			return res.status(401).json({ msg: "Post already liked" });
		}

		const userFields = {};
		userFields.likedPosts = user.likedPosts;

		userFields.likedPosts.push(postId);

		await User.findByIdAndUpdate(
			userId,
			{
				$set: userFields,
			},
			{
				new: true,
			}
		);

		res.status(200).json({ msg: "Added post to liked posts" });
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};

exports.removeLike = async (req, res) => {
	const postId = req.params.id;
	const userId = req.user.id;

	try {
		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ msg: "User not found" });
		}

		const likedPosts = user.likedPosts;

		// Check if post is liked
		const idx = likedPosts.findIndex(post => post.toString() === postId);

		if (idx === -1) {
			return res.status(404).json({ msg: "Post not liked" });
		}

		const userFields = {};

		const updatedLikedPosts = likedPosts.filter(
			(curId) => curId.toString() !== postId
		);

		userFields.likedPosts = updatedLikedPosts;

		await User.findByIdAndUpdate(
			userId,
			{
				$set: userFields,
			},
			{
				new: true,
			}
		);

		res.status(200).json({ msg: "Unliked post" });
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};

