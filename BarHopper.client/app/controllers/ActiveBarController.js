import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"


function _drawActiveBar() {
  const activeBar = AppState.activeBar?.ActiveBarTemplate

  setHTML('activeBarHTM', activeBar)

}


export class ActiveBarController {
  constructor() {
    _drawActiveBar()
  }
}