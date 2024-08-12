const TeacherModel = require('../database/models/teacher')

class TeacherService {
  async addTeacherData(data) {
    const itemId = data.itemId
    try {
      const result = await TeacherModel.findOne({
        where: {
          itemId,
        },
      })
      if (result) {
        return await TeacherModel.update(data, {
          where: {
            itemId,
          },
        })
      } else {
        return await TeacherModel.create(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new TeacherService()
