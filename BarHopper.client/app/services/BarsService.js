import { AppState } from "../AppState.js"
import { Bar } from "../models/Bar.js"
import { api } from "./AxiosService.js"

class BarsService {
  async getBars() {
    const res = await api.get('api/bars')
    console.log(res.data, 'this is res.data')
    AppState.bars = res.data.map(b => new Bar(b))
    AppState.emit('bars')
  }

}

export const barsService = new BarsService()