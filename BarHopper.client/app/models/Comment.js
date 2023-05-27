export class Comment {
  constructor(data) {
    this.description = data.description
    this.hopperId = data.hopperId
    this.barId = data.barId
  }

  get CommentTemplate() {
    return /*html*/ `
    <div class="col-12 d-flex justify-content-center align-items-center">
      <div class="comment-container">
        <div></div>
        <div class="content">
          ${this.description}
        </div>
      </div>
    </div>
    `
  }


  static CreateCommentTemplate() {
    return /*html*/ `
    this is where the input will be
    `
  }


}