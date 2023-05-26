import BaseController from "../utils/BaseController.js";
import { barsService } from "../services/BarsService.js";
import { hoppersService } from "../services/HoppersService.js";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class BarsController extends BaseController{
constructor(){
  super('api/bars')
  this.router
  .get('', this.getBars)
  .get('/:barId', this.getBarById)
  .get('/:barId/hoppers', this.getHoppersByBarId)
  .use(Auth0Provider.getAuthorizedUserInfo)
  .post('', this.createBar)
  .put('/:barId', this.editBar)
  .delete('/:barId', this.deleteBar)
}
  async deleteBar(req, res, next) {
    try {
      const barId = req.params.barId
      const userId = req. userInfo.id
      await barsService.deleteBar(barId, userId)
      return res.send('Bar at ${barId} was blacked out')
    } catch (error) {
      next(error)
    }
  }
  async editBar(req,res,next) {
    try {
      const barData = req.body
      const barId = req.params.barId
      const userId = req.userInfo.id
      const editedBar = await barsService.editBar(barData, barId, userId)
      res.send(editedBar)
    } catch (error) {
      next(error)
    }
  }
  
 
 async getBars(req, res, next) {
   try {
    const query = req.query
    const bars = await barsService.getBars(query)
    return res.send(bars)
   } catch (error) {
    next(error)
   }
  }

 async getBarById(req, res, next) {
    try {
     const barId = req.params.barId
     const bar = await barsService.getBarById(barId)
     return res.send(bar)
    } catch (error) {
      next(error)
    }
  }

 async getHoppersByBarId(req, res, next) {
  try {
    const barId = req.params.barId
    const hopper = await hoppersService.getHoppersByBarId(barId)
    return res.send(hopper)
  } catch (error) {
    next(error)
  }
}
async  createBar(req, res, next) {
try {
  req.body.barHopperId = req.userInfo.id
  const barData = req.body
  const newBar = await barsService.createBar(barData)
  return res.send(newBar)
} catch (error) {
  next(error)
}
}

}