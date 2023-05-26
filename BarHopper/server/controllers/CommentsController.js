import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { commentsService } from "../services/CommentsService.js";


export class CommentsController extends BaseController{
  constructor() {
    super('api/comments')
    this.router
    .get('', this.getComments)
    .get('/:commentId', this.getCommentById)
    .get('/bar/:barId', this.getCommentByBarId)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createComment)
    .delete('/:commentId', this.deleteComment)
  }

  async getCommentByBarId(req, res, next){
    try {
      const barId = req.params.barId
      const comments = await commentsService.getCommentsByBarId(barId)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }
  async getComments(req, res, next) {
    try {
      const query = req.query
      const comments = await commentsService.getComments(query)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }
  async getCommentById(req, res, next) {
    try {
      const commentId = req.params.commentId
      const comment = await commentsService.getCommentById(commentId)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }
  async createComment(req, res, next) {
    try {
      req.body.commentId = req.userInfo.id
      const newComment = await commentsService.createComment(req.body)
      return res.send(newComment)
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next) {
    try {
      const commentId = req.params.commentId
      const userId = req.userInfo.id
      await commentsService.deleteComment(commentId, userId)
      return res.send('Comment at ${commentId} we dont like')
    } catch (error) {
      next(error)
    }
  }
}