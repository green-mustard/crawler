const { where } = require('sequelize')
const PopularCourseModel = require('../database/models/popularCourse')

class PopularCourseService {
  async addPopularCourseData(data) {
    const itemId = data.itemId
    try {
      const result = await PopularCourseModel.findOne({
        where: {
          itemId,
        },
      })
      if (result) {
        return await PopularCourseModel.update(data, {
          where: {
            itemId,
          },
        })
      } else {
        return await PopularCourseModel.create(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new PopularCourseService()
