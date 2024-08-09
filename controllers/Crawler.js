const { startProcess, qiniuUpload } = require('../libs/utils')
const { addSliderData } = require('../services/Slider')

class Crawler {
  crawlSliderData() {
    startProcess({
      file: 'slider',
      message(data) {
        data.map(async item => {
          if (item.imgSrc && !item.imgKey) {
            try {
              const imgData = await qiniuUpload({
                url: item.imgSrc,
                ext: '.jpg',
                path: 'crawler_3rd_slider/',
              })
              if (imgData.key) {
                item.imgKey = imgData.key
              }
              const result = await addSliderData(item)
              if (result) {
                console.log('数据保存成功')
              } else {
                console.log('数据保存失败')
              }
            } catch (error) {
              console.log(error)
            }
          }
        })
      },

      async exit(code) {
        console.log('子进程退出，退出码：', code)
      },

      async error(err) {
        console.log('子进程出错：', err)
      },
    })
  }
}

module.exports = new Crawler()
