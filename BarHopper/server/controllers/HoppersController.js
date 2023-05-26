import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { hoppersService } from "../services/HoppersService.js";

export class HoppersController extends BaseController{
  constructor(){
    super('api/hoppers')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.becomeHopper)
  }
  async becomeHopper(req, res, next) {
  try {
    req.body.hopperId = req.userInfo.id
      const hopper = await hoppersService.becomeHopper(req.body)
      return res.send(hopper)
  } catch (error) {
    next(error)
  }
  }
}