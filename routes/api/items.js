var passport = require('passport');
require('../../config/passport')(passport);

const express = require('express');
const router = express.Router();

const Item = require('../../models/items')

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

// @route   GET api/items
// @desc    GET All Items
// @access  Public
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    var token = getToken(req.headers);
    if (token) {
        Item.find()
            .then(items => res.json(items))
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});


// @route   POST api/items
// @desc    CREATE A Post
// @access  Public
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    var token = getToken(req.headers);
    if (token) {
        const newItem = new Item({
            title: req.body.title,
            description: req.body.description,
            labels: req.body.labels,
            status: req.body.status
        });
        newItem.save().then(item => res.json(item));
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    var token = getToken(req.headers);
    if (token) {
        Item.findById(req.params.id)
            .then(item => item.remove().then(() => res.json({ success: true })))
            .catch(err => res.status(404).json({ success: false }));
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

module.exports = router;                                                                                                                