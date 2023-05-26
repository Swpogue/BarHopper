import { query } from "express";
import BaseController from "../utils/BaseController.js";
import { barsService } from "../services/BarsService.js";

export class BarsController extends BaseController{
constructor(){
  super('api/bars')
  this.router
  .get('', this.getBars)
}
 async getBars(req, res, next) {
   try {
    const query = req=query
    const bars = await barsService.getBars(query)
    return res.send(bars)
   } catch (error) {
    next(error)
   }
  }

}