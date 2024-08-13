const AgencyInfoModel = require('../database/models/agencyInfo')

class AgenceInfoService {
  async addAgencyInfoData(data) {
    const imgSrc = data.imgSrc
    try {
      const result = await AgencyInfoModel.findOne({
        where: {
          imgSrc,
        },
      })
      if (result) {
        return await AgencyInfoModel.update(data, {
          where: {
            imgSrc,
          },
        })
      } else {
        return await AgencyInfoModel.create(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new AgenceInfoService()
