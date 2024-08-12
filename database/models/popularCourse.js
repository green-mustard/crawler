const connection = require('../mysql_connection')
const { STRING, INT } = require('../../config/db_type_config')

const PopularCourse = connection.define('popular_course_data', {
  itemId: {
    comment: '课程id',
    type: INT,
    allowNull: false,
    unique: true,
  },
  courseTitle: {
    comment: '课程名称',
    type: STRING,
    allowNull: false,
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
  feedbackRate: {
    comment: '课程好评率',
    type: STRING,
    allowNull: false,
  },
  status: {
    comment: '课程状态',
    type: INT,
    allowNull: false,
    defaultValue: 1,
  },
})

module.exports = PopularCourse
