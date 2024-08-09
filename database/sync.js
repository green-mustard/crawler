const connection = require('./mysql_connection')
require('./models/index')

async function authenticateDatabase() {
  try {
    await connection.authenticate()
    console.log('MySQL服务器已连接。')
  } catch (err) {
    console.error('MySQL服务器连接失败，错误信息如下:' + err)
  }
}

authenticateDatabase()

async function synchronizeDatabase() {
  try {
    await connection.sync()
    console.log('数据已同步到数据库中。')
  } catch (error) {
    console.log('数据同步失败，错误信息如下:' + error)
  }
}

synchronizeDatabase()
