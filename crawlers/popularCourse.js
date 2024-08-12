const crawler = require('../libs/crawler')
const { crawlerOptions } = require('../config/account_config')

crawler({
  url: crawlerOptions.url.recommend,
  callback() {
    const items = document.querySelectorAll(
      '.gems-section-content .kc-col---OaJWB7',
    )
    const feedbackRateItems = document.querySelectorAll(
      '.kc-course-card-desc---pEwXJa span',
    )

    const feedbackRates = [...feedbackRateItems].reduce((acc, item) => {
      if (item.innerText.includes('好评率') && acc.length < 8) {
        acc.push(item.innerText)
      }
      return acc
    }, [])

    // 构建课程数据
    const popularCourseData = [...items].slice(0, 8).map((item, index) => {
      const itemId = index + 1
      const imgSrc = item.querySelector('img').src
      const courseTitle = item.querySelector(
        '.kc-course-card-name---QUOvPQ',
      ).innerText
      const coursePrice = item.querySelector(
        '.kc-course-card-price-current---iUq7LY span',
      ).innerText
      const studentCount = item.querySelector(
        '.kc-course-card-footer-info---iNSdzI span:nth-child(2)',
      ).innerText

      return {
        itemId,
        imgSrc,
        courseTitle,
        coursePrice,
        studentCount,
        feedbackRate: feedbackRates[index],
      }
    })

    return popularCourseData
  },
})
