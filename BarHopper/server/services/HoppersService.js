import { dbContext } from "../db/DbContext.js"

class HoppersService {
async  getHoppersByBarId(barId) {
    const hoppers = await dbContext.Hoppers.find({ barId })
    .populate('hopper', 'name picture')
    return hoppers
  }
  
async  becomeHopper(body) {
    const hopper = await dbContext.Hoppers.create(body)
    await hopper.populate('hopper', 'name picture')
    return hopper
  }
}


export const hoppersService = new HoppersService()