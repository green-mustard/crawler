const crawler = require('../libs/crawler')
const { crawlerOptions } = require('../config/account_config')

crawler({
  url: crawlerOptions.url.recommend,
  callback() {
    const items = document.querySelectorAll('.swiper-wrapper .swiper-slide img')
    const sliderData = []
    const imgArr = [...items]

    imgArr.forEach((item, index) => {
      if (item) {
        const imgSrc = item.getAttribute('src')
        const itemId = index + 1
        const title = '图片' + itemId
        const imgKey = ''

        sliderData.push({
          imgSrc,
          itemId,
          title,
          imgKey,
        })
      } else {
        console.log('没有找到元素')
      }
    })
    return sliderData
  },
})
