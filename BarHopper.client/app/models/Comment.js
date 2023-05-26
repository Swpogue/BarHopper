export class Comment {
  constructor(data) {
    this.description = data.description
    this.hopperId = data.hopperId
    this.barId = data.barId
  }

  get CommentsTemplate() {
    return /*html*/ `
    <div>
    ${this.description}
    </div>
    `
  }


}