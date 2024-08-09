const Sequelize = require('sequelize')
const {
  mysql: { base },
} = require('../config/database_config')

const sequelize = new Sequelize(base.database, base.user, base.password, {
  host: base.host,
  dialect: base.dialect,
  pool: base.pool,
})

sequelize
  .authenticate()
  .then(() => {
    console.log('MySQL服务器已连接。')
  })
  .catch(err => {
    console.error('MySQL服务器连接失败，错误信息如下:', err)
  })

module.exports = sequelize
