const express = require('express')
const router = express.Router()
const newsController = require('../app/controllers/NewsController')

//Định nghĩa router con trong module news
router.use('/:slug', newsController.show)
router.use('/', newsController.index)

module.exports = router