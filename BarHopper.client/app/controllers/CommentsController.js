import { AppState } from "../AppState.js"
import { commentsService } from "../services/CommentsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawComments() {
  let comments = AppState.comments
  let template = ''
  comments.forEach(c => template += c.CommentTemplate)
  if (template == '') {
    template = 'No Comments'
  }
  setHTML('commentsHTM', template)
}

export class CommentsController {
  constructor() {
    AppState.on('comments', _drawComments)
    this.getCommentsByBarId()
  }

  async getCommentsByBarId() {
    try {
      await commentsService.getCommentsByBarId()
    } catch (error) {
      Pop.error("error")
    }
  }

}