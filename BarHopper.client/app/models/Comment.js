import { AppState } from "../AppState.js"

export class Comment {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.hopperId = data.hopperId
    this.barId = data.barId
    this.userImg = data.hopper.picture
  }

  get CommentTemplate() {
    return /*html*/ `
    <div class="col-12 d-flex justify-content-center align-items-center">
      <div class="comment-container">
        <img src="${this.userImg}">
        <div class="content">
          ${this.description}
        </div>
        ${this.computeDelete}
      </div>
    </div>
    `
  }

  get computeDelete() {
    if (this.hopperId == AppState.account?.id) {
      return /*html*/`
      <div class="delete"><i class="mdi mdi-delete" onclick="app.CommentsController.deleteCommentById('${this.id}')"></i></div>
      `
    } else {
      return '<div></div>'
    }
  }


  static CreateCommentTemplate() {
    return /*html*/ `
      <div class="col-12 d-flex justify-content-center align-items-center comment-sticky">
        <form onsubmit="app.CommentsController.createComment()" class="new-comment">
          <label for="description">New Comment</label>
          <input type="text" name="description" alt="New Comment">
          <button type="submit">Submit</button>
        </form>
      </div>
    `
  }


}