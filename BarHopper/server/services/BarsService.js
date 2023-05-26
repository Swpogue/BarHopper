import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";



class BarsService {
  async editBar(barData, barId, userId) {
    const originalBar = await this.getBarById(barId)
    if (originalBar.barHopperId != userId){
      throw new Forbidden("You are drunk you cant edit this")
    }
    originalBar.name = barData.name || originalBar.name
    originalBar.description = barData.description || originalBar.description
    originalBar.img = barData.img || originalBar.img
    originalBar.favoriteColor = barData.favoriteColor || originalBar.favoriteColor
    originalBar.activities = barData.activities || originalBar.activities
    originalBar.theme = barData.theme ||originalBar.theme

    await originalBar.save()
    return originalBar
  }
  
  async getBars(query) {
    const bars = await dbContext.Bars.find(query)
      .populate('barHopper', 'name picture')
      .populate('hopperCount')
      .sort('hopperCount')
    return bars
  }

 async getBarById(barId) {
    const bar = await dbContext.Bars.findById(barId)
    .populate('barHopper', 'name picture')
    .populate('hopperCount')
    if (!bar){
      throw new BadRequest('NO BAR HERE!')
    }
    return bar
  }

 async createBar(barData) {
    const newBar = await dbContext.Bars.create(barData)
    await newBar.populate('barHopper hopperCount', 'name picture')
    return newBar
  }

}

export const barsService = new BarsService()