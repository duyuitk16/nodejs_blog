const express = require('express')
const router = express.Router()
const newsController = require('../app/controllers/NewsController')

//Định nghĩa router con trong module news
router.get('/:slug', newsController.show)
router.get('/', newsController.index)

module.exports = router