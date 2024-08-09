const router = require('koa-router')()
const crawlerController = require('../controllers/Crawler')

router.prefix('/crawler')

router.get('/crawl_slider_data', crawlerController.crawlSliderData)

module.exports = router
