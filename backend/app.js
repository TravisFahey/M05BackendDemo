// setup
const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const Song = require('./models/songs')

const app = express()

// tells app variable to be an express server
app.use(cors())
app.use(bodyParser.json())

const router = express.Router()

//grab all songs in db
router.get('/songs', (req, res) => {
    let query = {}
    if (req.query.genre) {
        query = {genre: req.query.genre}
    }

    Song.find(query, function(err, songs) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.json(songs)
        }
    })
})

// all requests that use an api start with //api
app.use('/api', router)
app.listen(3000)