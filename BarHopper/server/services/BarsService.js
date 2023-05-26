import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";



class BarsService {
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