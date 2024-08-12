const crawler = require('../libs/crawler')
const { crawlerOptions } = require('../config/account_config')

crawler({
  url: crawlerOptions.url.teacher,
  callback() {
    const items = document.querySelectorAll('.teacher-list-card-pc')

    const teacherData = [...items].map((item, index) => {
      const itemId = index + 1
      const imgSrc = item.querySelector('img').src
      const teacherName = item.querySelector('.tlci-title-pc').innerText
      const courseCount = item.querySelector('.tlci-num').innerText
      const studentCount = item.querySelector(
        '.tlci-detail-pc span:nth-child(5)',
      ).innerText
      const teacherDesc = item.querySelector('.tlci-summary-pc').innerText

      return {
        itemId,
        imgSrc,
        teacherName,
        courseCount,
        studentCount,
        teacherDesc,
      }
    })
    return teacherData
  },
})
