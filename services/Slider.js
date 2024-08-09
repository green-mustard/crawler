const SliderModel = require('../database/models/slider')

class SliderService {
  async addSliderData(data) {
    const itemId = data.itemId
    try {
      const result = await SliderModel.findOne({
        where: {
          itemId,
        },
      })
      if (result) {
        return await SliderModel.update(data, {
          where: {
            itemId,
          },
        })
      } else {
        return await SliderModel.create(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new SliderService()
