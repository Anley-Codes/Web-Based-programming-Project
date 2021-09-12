
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, (err) => {
    if (!err) {
        console.log('MongoDB connection successful.');
    }
    else {
        console.log('Error connecting to MongoDB database:' + JSON.stringify(err, undefined, 2));
    }
});

require('./infopage.models');