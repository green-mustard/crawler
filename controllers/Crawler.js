const { startProcess, qiniuUpload } = require('../libs/utils')
const { addSliderData } = require('../services/Slider')
const { addPopularCourseData } = require('../services/PopularCourse')
const { addTeacherData } = require('../services/Teacher')
const { addCourseData } = require('../services/Course')
const { addAgencyInfoData } = require('../services/AgencyInfo')

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
  crawlPopularCourseData() {
    startProcess({
      file: 'popularCourse',
      message(data) {
        data.map(async item => {
          if (item.imgSrc && !item.imgKey) {
            try {
              const imgData = await qiniuUpload({
                url: item.imgSrc,
                ext: '.jpg',
                path: 'crawler_3rd_popularcourse/',
              })
              if (imgData) {
                item.imgKey = imgData.key
              }

              const result = await addPopularCourseData(item)
              if (result) {
                console.log('数据保存成功')
              } else {
                console.log('数据保存失败')
              }
            } catch (error) {}
          }
        })
      },
      exit(code) {},
      error(err) {},
    })
  }
  crawlTeacherData() {
    startProcess({
      file: 'teacher',
      message(data) {
        data.map(async item => {
          if (item.imgSrc && !item.imgKey) {
            try {
              const imgData = await qiniuUpload({
                url: item.imgSrc,
                ext: '.jpg',
                path: 'crawler_3rd_teacher/',
              })
              if (imgData) {
                item.imgKey = imgData.key
              }
              const result = await addTeacherData(item)
              if (result) {
                console.log('数据保存成功')
              } else {
                console.log('数据保存失败')
              }
            } catch (error) {}
          }
        })
      },
      exit(code) {
        console.log('子进程退出，退出码：', code)
      },
      error(err) {
        console.log('子进程出错：', err)
      },
    })
  }
  crawlCourseData() {
    startProcess({
      file: 'course',
      message(data) {
        data.map(async item => {
          if (item.imgSrc && !item.imgKey) {
            try {
              const imgData = await qiniuUpload({
                url: item.imgSrc,
                ext: '.jpg',
                path: 'crawler_3rd_course/',
              })
              if (imgData) {
                item.imgKey = imgData.key
              }

              const result = await addCourseData(item)
              if (result) {
                console.log('数据保存成功')
              } else {
                console.log('数据保存失败')
              }
            } catch (error) {}
          }
        })
      },

      exit(code) {
        console.log('子进程退出，退出码：', code)
      },

      error(err) {
        console.log('子进程出错：', err)
      },
    })
  }
  crawlAgencyInfoData() {
    startProcess({
      file: 'agencyInfo',
      message(data) {
        data.map(async item => {
          if (item.imgSrc && !item.imgKey) {
            try {
              const imgData = await qiniuUpload({
                url: item.imgSrc,
                ext: '.jpg',
                path: 'crawl_3rd_agencyinfo/',
              })
              if (imgData) {
                item.imgKey = imgData.key
              }

              const result = await addAgencyInfoData(item)
              if (result) {
                console.log('数据保存成功')
              } else {
                console.log('数据保存失败')
              }
            } catch (error) {}
          }
        })
      },
      exit(code) {
        console.log('子进程退出，退出码：', code)
      },
      error(err) {
        console.log('子进程出错：', err)
      },
    })
  }
}

module.exports = new Crawler()
