const connection = require('../mysql_connection')
const { STRING, INT } = require('../../config/db_type_config')

const Teacher = connection.define('teacher_data', {
  itemId: {
    comment: '教师ID',
    type: INT,
    allowNull: false,
    unique: true,
  },
  imgSrc: {
    comment: '教师头像',
    type: STRING,
    allowNull: false,
  },
  imgKey: {
    comment: '七牛云图片key',
    type: STRING,
    allowNull: false,
  },
  teacherName: {
    comment: '教师姓名',
    type: STRING,
    allowNull: false,
  },
  courseCount: {
    comment: '课程数量',
    type: INT,
    allowNull: false,
  },
  studentCount: {
    comment: '学生数量',
    type: STRING,
    allowNull: false,
  },
  teacherDesc: {
    comment: '教师介绍',
    type: STRING,
    allowNull: false,
  },
  status: {
    comment: '教师状态',
    type: INT,
    allowNull: false,
    defaultValue: 1,
  },
})

module.exports = Teacher
