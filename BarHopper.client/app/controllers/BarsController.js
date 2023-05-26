import { AppState } from "../AppState.js"
import { barsService } from "../services/BarsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawBars() {
  let template = ''
  AppState.bars.forEach(b => { template += b })

  setHTML('barsHTM', template)
}
export class BarsController {
  constructor() {
    // console.log('bars contrller online')
    this.getBars()
    AppState.on('bars', _drawBars)
  }
  async getBars() {
    try {
      await barsService.getBars()
    } catch (error) {
      Pop.error(error)
    }
  }

}