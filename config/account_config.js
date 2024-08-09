module.exports = {
  qiniu: {
    keys: {
      accessKey: 'YdHMldeM-cp7Qg84yUuiamebbfy9-q0WcFHlcy22',
      secretKey: '2zfoot6jv9bLeuhVKNULC3vcHhkdMJMu0IfGidxe',
    },
    bucket: {
      crawler_3rd: {
        name: 'crawler-test0086',
        domain: 'greenmustard0086.cn',
      },
    },
  },
  crawlerOptions: {
    url: {
      // 推荐内容URL
      recommend: 'https://duyi.ke.qq.com/?activeTab=head_recommend',
      // 介绍内容URL
      introduction: 'https://duyi.ke.qq.com/?activeTab=head_introduction',
      // 教师信息URL
      teacher: 'https://duyi.ke.qq.com/?activeTab=head_teacher',
      // 课程信息URL
      course: 'https://duyi.ke.qq.com/?activeTab=head_course',
    },
  },
}
