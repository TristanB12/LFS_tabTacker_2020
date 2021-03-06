const Song = require('../models/Songs')

module.exports = {
    getAllSongs(req, res) {
        Song.find()
            .then(songs => res.status(200).json({
                songs: songs
            }))
            .catch(error => res.status(500).json({
                message: 'An error has occured trying to fetch the songs',
                error: error
            }))
    },
    addSong(req, res) {
        const song = new Song({
            ...req.body
        })
        song.save()
            .then(song => res.status(200).json({
                song: song,
                message: 'your song has been added'
            }))
            .catch(error => res.status(500).json(error))
    },
    getSongDetails(req, res) {
        Song.findOne({_id: req.params.songId})
            .then(song => res.status(200).json({songDetails: song}))
            .catch(error => res.status(400).json({error}))
    },
    filterSongs(req, res) {
        switch (req.body.filterType) {
            case 'title':
                Song.find({title: req.body.filterContent})
                    .then(songs => res.status(200).json({
                        songs: songs
                    }))
                    .catch(error => req.status(500).json(error))
                break;
            case 'artist':
                Song.find({artist: req.body.filterContent})
                    .then(songs => res.status(200).json({
                        songs: songs
                    }))
                    .catch(error => req.status(500).json(error))
                break;
            case 'album':
                Song.find({album: req.body.filterContent})
                    .then(songs => res.status(200).json({
                        songs: songs
                    }))
                    .catch(error => req.status(500).json(error))
                break;
            case 'genre':
                Song.find({genre: req.body.filterContent})
                    .then(songs => res.status(200).json({
                        songs: songs
                    }))
                    .catch(error => req.status(500).json(error))
                break;
            default:
                break;
        }
    }
}

/*Song.remove({}, function(err) {
    console.log('collection removed')
});*/