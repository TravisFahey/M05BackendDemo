const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sdev255:Password255@songs.lrgvbge.mongodb.net/?appName=Songs")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose