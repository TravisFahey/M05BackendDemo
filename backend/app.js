// setup
const express = require('express')

//use cors to host backend and frontend on same device
var cors = require('cors')

// tells app variable to be an express server
const app = express()
app.use(cors())
const router = express.Router()

// make an api using routes
// routes are used to handle browser requests they look like urls... the difference is that when
// a browser requests a route it is dynamically handled using a function

// GET request almost always has a param for req and response.

router.get('/songs', function(req, res) {
    const songs = [
        {
            title: "Uptown Funk",
            artist: "Bruno Mars",
            popularity: 10,
            releaseDate: new Date("2014-11-10"),
            genre: ["funk", "boogy"]
        },
        {
            title: "Shape of You",
            artist: "Ed Sheeran",
            popularity: 9,
            releaseDate: new Date("2017-08-04"),
            genre: ["pop", "dance"]
        },
        {
            title: "Bohemian Rhapsody",
            artist: "Queen",
            popularity: 10,
            releaseDate: new Date("1975-10-31"),
            genre: ["rock", "opera"]
        }
    ]

    res.json(songs)
})

// all requests that use an api start with //api
app.use('/api', router)
app.listen(3000)