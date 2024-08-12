const crawler = require('../libs/crawler')
const { crawlerOptions } = require('../config/account_config')

crawler({
  url: crawlerOptions.url.course,
  callback() {
    const items = document.querySelectorAll('.kc-col---OaJWB7')
    const courseData = [...items].map((item, index) => {
      const itemId = index + 1
      const imgSrc = item.querySelector('img').src
      const courseLink = item.querySelector('a').href
      const courseTitle = item.querySelector(
        '.kc-course-card-name---QUOvPQ',
      ).innerText
      const courseCount = item.querySelector(
        '.kc-course-card-tag---Et_Va3',
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
        courseLink,
        courseTitle,
        courseCount,
        coursePrice,
        studentCount,
      }
    })
    return courseData
  },
})
