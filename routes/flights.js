const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET	/books/new	booksCtrl.new
router.get('/new', flightsCtrl.new);

// GET	/books/:id	booksCtrl.show
router.get('/:id', flightsCtrl.show);

// POST	/books	booksCtrl.create
router.post('/', flightsCtrl.create);

// GET	/books	booksCtrl.index
router.get('/', flightsCtrl.index);

module.exports = router;