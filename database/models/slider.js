const connection = require('../mysql_connection')
const { STRING, INT } = require('../../config/db_type_config')

const Slider = connection.define('slider_data', {
  itemId: {
    comment: '轮播图id',
    type: INT,
    allowNull: false,
    unique: true,
  },
  imgSrc: {
    comment: '轮播图图片地址',
    type: STRING,
    allowNull: false,
  },
  imgKey: {
    comment: '七牛云上传的图片key',
    type: STRING,
    allowNull: false,
  },
  status: {
    comment: '轮播图状态',
    type: INT,
    allowNull: false,
    defaultValue: 1,
  },
})

module.exports = Slider
