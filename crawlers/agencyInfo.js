const crawler = require('../libs/crawler')
const { crawlerOptions } = require('../config/account_config')

crawler({
  url: crawlerOptions.url.introduction,
  callback() {
    const agencyData = []
    const imgSrc = document.querySelector('.kc-agency-hd-avatar-pc img').src
    const agencyName = document.querySelector('.agency-name').innerText
    const agencySlogan = document.querySelector('.agency-desc').innerText
    const agencyDesc = document.querySelector('.aiwi-content span').innerText
    const feedbackRate = document.querySelector(
      '.kc-agency-hd-count-ctn div:nth-child(1) .val',
    ).innerText
    const studentCount = document.querySelector(
      '.kc-agency-hd-count-ctn div:nth-child(2) .val',
    ).innerText
    const courseCount = document.querySelector(
      '.kc-agency-hd-count-ctn div:nth-child(3) .val',
    ).innerText

    agencyData.push({
      imgSrc,
      agencyName,
      agencySlogan,
      agencyDesc,
      feedbackRate,
      studentCount,
      courseCount,
    })

    return agencyData
  },
})
