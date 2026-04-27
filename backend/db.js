const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://sdev255:<Password255>@songdb.cmblpw5.mongodb.net/?appName=SongDb');

module.exports = mongoose;