import { AppState } from "../AppState.js"
import { Bar } from "../models/Bar.js"
import { getFormData } from "../utils/FormHandler.js"
import { api } from "./AxiosService.js"

class BarsService {
  async deleteBarById(id) {
    const res = await api.delete(`api/bars/${id}`)
    AppState.bars = AppState.bars.filter(b => b.id != id)
    AppState.emit('bars')
  }
  setActive(barId) {
    const bar = AppState.bars.find(b => b.id == barId)
    AppState.activeBar = bar
    console.log(bar);
  }

  async createBar(formData) {
    console.log(formData);

    // This takes in the checkboxes and pushes them into an array
    let activities = []
    if (formData.karaoke == 'on') { activities.push('karaoke') }
    if (formData.dance == 'on') { activities.push('dance') }
    if (formData.pool == 'on') { activities.push('pool') }
    if (formData.darts == 'on') { activities.push('darts') }
    if (formData.cornhole == 'on') { activities.push('cornhole') }
    if (formData.arcades == 'on') { activities.push('arcades') }

    let name = formData.name
    let img = formData.img
    let favoriteColor = formData.favoriteColor
    let theme = formData.theme

    let postData = { name, img, favoriteColor, theme, activities }

    // console.log('the assembled object is', postData)

    const res = await api.post('api/bars', postData)
    // console.log(res.data)
    AppState.bars.push(new Bar(res.data))
    AppState.emit('bars')

  }

  async getBars() {
    const res = await api.get('api/bars')
    // console.log(res.data, 'this is res.data')
    AppState.bars = res.data.map(b => new Bar(b))
    // console.log(AppState.bars)
    AppState.emit('bars')
  }

}

export const barsService = new BarsService()