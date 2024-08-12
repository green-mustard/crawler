const connection = require('../mysql_connection')
const { STRING, INT } = require('../../config/db_type_config')

const Course = connection.define('course_data', {
  itemId: {
    comment: '课程ID',
    type: INT,
    allowNull: false,
    unique: true,
  },
  imgSrc: {
    comment: '课程图片',
    type: STRING,
    allowNull: false,
  },
  imgKey: {
    comment: '七牛云上传的图片key',
    type: STRING,
    allowNull: false,
    defaultValue: '',
  },
  courseLink: {
    comment: '课程链接',
    type: STRING,
    allowNull: false,
  },
  courseTitle: {
    comment: '课程标题',
    type: STRING,
    allowNull: false,
  },
  courseCount: {
    comment: '课程数量',
    type: STRING,
    allowNull: false,
  },
  coursePrice: {
    comment: '课程价格',
    type: STRING,
    allowNull: false,
  },
  studentCount: {
    comment: '课程报名人数',
    type: STRING,
    allowNull: false,
  },
})

module.exports = Course
