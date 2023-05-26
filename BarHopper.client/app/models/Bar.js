export class Bar {
  constructor(data) {
    this.name = data.name || ''
    this.description = data.description || ''
    this.logo = data.img || ''
    this.favColor = data.favoriteColor || ''
    this.activities = data.activities || []
    this.theme = data.theme || ''
    this.barHopperId = data.barHopperId
  }

  static CreateBarTemplate() {
    // TODO make bar template
    return ''
  }

  get BarTemplate() {
    return /*html*/ `
    <div>${this.name}</div>
    `
  }
}