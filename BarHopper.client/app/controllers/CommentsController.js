import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { commentsService } from "../services/CommentsService.js"
import { getFormData } from "../utils/FormHandler.js"
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
  // console.log(AppState.comments);
}

function _drawCommentForm() {
  let template = Comment.CreateCommentTemplate()
  setHTML('createCommentHTM', template)
}

export class CommentsController {
  constructor() {
    this.getCommentsByBarId()
    _drawCommentForm()
    AppState.on('comments', _drawComments)
    AppState.on('account', _drawComments)
  }

  async getCommentsByBarId() {
    try {
      await commentsService.getCommentsByBarId()
    } catch (error) {
      Pop.error("error")
    }
  }

  async createComment() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = event.target
      console.log(form)
      const formData = getFormData(form)
      console.log('creating comment', formData)
      await commentsService.createComment(formData)

    } catch (error) {
      Pop.error(error)
    }
  }

  async deleteCommentById(id) {
    try {
      if (await Pop.confirm('You Sure')) {
        await commentsService.deleteCommentById(id)
      }
    } catch (error) {
      Pop.error(error)
    }
  }

}