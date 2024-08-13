const connection = require('../mysql_connection')
const { STRING, INT, TEXT } = require('../../config/db_type_config')

const agencyInfo = connection.define('agency_data', {
  imgSrc: {
    comment: 'logo 图片地址',
    type: STRING,
    allowNull: false,
  },
  imgKey: {
    comment: '七牛云上传图片的key',
    type: STRING,
    allowNull: false,
    defaultValue: '',
  },
  agencyName: {
    comment: '机构名称',
    type: STRING,
    allowNull: false,
  },
  agencySlogan: {
    comment: '机构标语',
    type: STRING,
    allowNull: false,
  },
  agencyDesc: {
    comment: '机构简介',
    type: TEXT,
    allowNull: false,
  },
  feedbackRate: {
    comment: '好评率',
    type: STRING,
    allowNull: false,
  },
  studentCount: {
    comment: '学员数量',
    type: INT,
    allowNull: false,
  },
  courseCount: {
    comment: '课程数量',
    type: INT,
    allowNull: false,
  },
})

module.exports = agencyInfo
