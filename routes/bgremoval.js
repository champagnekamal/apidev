const express = require('express')
const router = express.Router()
const multer = require('multer');
const getbgremove = require('../controllers/bgremovecont')

const upload = multer({ dest: 'uploads/' }); 
router.route('/').post((req, res, next) => {
    upload.single('image')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: 'Error uploading image' });
        }
        getbgremove(req, res);
    });
});

module.exports = router 