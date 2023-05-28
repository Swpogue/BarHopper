import { AppState } from "../AppState.js"
import { Bar } from "../models/Bar.js"
import { barsService } from "../services/BarsService.js"
import { commentsService } from "../services/CommentsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawBars() {
  let template = ''
  AppState.bars.forEach(b => { template += b.BarTemplate })

  setHTML('barsHTM', template) 
}

function _drawBarForm() {
  let template = Bar.CreateBarTemplate()
  setHTML('addBarHTM', template)
}


export class BarsController {
  constructor() {
    // console.log('bars contrller online')
    this.getBars()
    // console.log('bars');
    _drawBarForm()
    AppState.on('bars', _drawBars)
  }
  async getBars() {
    try {
      await barsService.getBars()
    } catch (error) {
      Pop.error(error)
    }
  }

  async createBar() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = event.target
      console.log(form)
      const formData = getFormData(form)
      console.log('creating bar', formData)
      await barsService.createBar(formData)
    } catch (error) {
      Pop.error(error)
    }
  }

  setActive(barId) {
    console.log('setting active:', barId);
    try {
      barsService.setActive(barId)
    } catch (error) {
      Pop.error(error)
    }
  }






}