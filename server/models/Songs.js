const mongoose = require('mongoose')

const SongsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    albumImage: {
        type: String,
        required: false
    },
    youtubeId: {
        type: String,
        required: true
    },
    lyrics: {
        type: String,
        required: true
    },
    tab: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Song', SongsSchema)