const router = require('koa-router')()
const crawlerController = require('../controllers/Crawler')

router.prefix('/crawler')

router.get('/crawl_slider_data', crawlerController.crawlSliderData)
router.get('/crawl_popular_course', crawlerController.crawlPopularCourseData)
router.get('/crawl_teacher_data', crawlerController.crawlTeacherData)

module.exports = router
