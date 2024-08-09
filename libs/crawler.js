const pt = require('puppeteer')
module.exports = async function (options) {
  const browser = await pt.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    }),
    page = await browser.newPage(),
    url = options.url
  page.setViewport({ width: 1920, height: 1080 })
  await page.goto(url, {
    timeout: 30 * 1000,
    waitUntil: 'networkidle2',
  })
  const result = await page.evaluate(options.callback)
  process.send(result)
  setTimeout(() => {
    process.exit(0)
  }, 1000)
}
