const CourseModel = require('../database/models/course')

class CourseService {
  async addCourseData(data) {
    const itemId = data.itemId
    const result = await CourseModel.findOne({
      where: {
        itemId,
      },
    })
    if (result) {
      return await CourseModel.update(data, {
        where: {
          itemId,
        },
      })
    } else {
      return await CourseModel.create(data)
    }
  }
}

module.exports = new CourseService()
