const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

module.exports = (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization');

    // Check if token exists
    if (!token) {
        return res.status(404).json({ msg: 'Not authorized' });
    }

    try {
        // Decode the token
        const decoded = jwt.verify(token, process.env.jwtSecret);

        // Set the user and proceed
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token invalid' });
    }
}