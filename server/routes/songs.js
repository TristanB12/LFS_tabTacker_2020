const express = require('express')
const router = express.Router()

const songsController = require('../controllers/songsController')

router.get('/', songsController.getAllSongs)
router.post('/', songsController.addSong)
router.get('/:songId', songsController.getSongDetails)
router.post('/filter', songsController.filterSongs)
module.exports = router