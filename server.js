const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');

// Init middleware
app.use(express.json());

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB Connected...');
    app.listen(process.env.PORT, () => {
        console.log('Server started on port', process.env.PORT);
    })
}).catch(err => {
    console.error(err.message);
})