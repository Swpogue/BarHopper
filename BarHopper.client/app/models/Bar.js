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
    return /*html*/`
    <!-- STUB The modal to add a bar-->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

     <div onclick="app.BarsController.SetActive()" class="col-md-4">
        <div class="card">
        <img src="${this.logo}" alt="">
          <h3>${this.name}</h3>
        </div>
      </div>

    `
  }


}