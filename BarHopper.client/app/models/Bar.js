import { AppState } from "../AppState.js"

export class Bar {
  constructor(data) {
    this.id = data.id
    this.name = data.name || ''
    this.description = data.description || ''
    this.logo = data.img || ''
    this.favColor = data.favoriteColor || ''
    this.activities = data.activities || []
    this.theme = data.theme || ''
    this.barHopperId = data.barHopperId
  }

  static CreateBarTemplate() {
    return /*html*/ `
    <div class="modal fade" id="createBarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Create Bar</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="" onsubmit="app.BarsController.createBar()">

              <div class="make-bar-input">
                <label for="name">Bar Name</label>
                <input name="name" type="text">
              </div>

              <div class="make-bar-input">
                <label for="img">Logo Link</label>
                <input name="img" type="text">
              </div>

              <div class="make-bar-input">
                <label for="favoriteColor">Fav Color</label>
                <input name="favoriteColor" type="color">
              </div>

              <div class="make-bar-input">
                <label for="theme">Bar Theme</label>
                <input name="theme" type="text">
              </div>

              <div class="activities-box">

                <div class="activity">
                  <label for="karaoke">Karaoke</label>
                  <input name="karaoke" type="checkbox">
                </div>

                <div class="activity">
                  <label for="dance">Dance</label>
                  <input name="dance" type="checkbox">
                </div>

                <div class="activity">
                  <label for="pool">Pool</label>
                  <input name="pool" type="checkbox">
                </div>

                <div class="activity">
                  <label for="darts">Darts</label>
                  <input name="darts" type="checkbox">
                </div>

                <div class="activity">
                  <label for="cornhole">Cornhole</label>
                  <input name="cornhole" type="checkbox">
                </div>

                <div class="activity">
                  <label for="arcades">Arcades</label>
                  <input name="arcades" type="checkbox">
                </div>

              </div>



              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get BarTemplate() {
    return /*html*/ `

    <div class="col-md-4 col-12 align-content-center justify-content-center d-flex" >

      <div class="barcard-container">

        <div class="barcard">
          <a href="#bar" onclick="app.BarsController.setActive('${this.id}')" class="barcard-link">
            <img src="${this.logo}" alt="">
          </a>
          <div class="d-flex flex-row justify-content-between">
            <div>
              <h3>${this.name}</h3>
            </div> 
            ${this.computeDelete}
          </div>  
        </div>

        <div class="barcard-shadow" style="background-color: ${this.favColor};">
        </div>

      </div>

    </div>

    `
  }

  get ActiveBarTemplate() {
    return /*html*/ `
    <div class="active-bar-container">
      <img src="${this.logo}">
      <div class="active-bar-favcolor" style="background-color: ${this.favColor};"></div>
    </div>
    
    `
  }

  get computeDelete() {
    if (this.barHopperId == AppState.account?.id) {
      return /*html*/`
      <div class="delete"><i class="mdi mdi-delete" onclick="app.BarsController.deleteBarById('${this.id}')"></i></div>
      `
    } else {
      return '<div></div>'
    }
  }



}