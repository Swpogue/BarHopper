import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class CommentsService {
  async cascadeDeleteComments(barId) {
    const comments = await dbContext.Comments.find({barId})
    comments.forEach(async c => await c.remove())
    return
  }
  async getCommentsByBarId(barId) {
    const comments = await dbContext.Comments.find({barId})
    .populate('hopper', "name picture")    
    return comments
  }

  async getComments(query) {
    const comments = await dbContext.Comments.find(query)
    return comments
  }

  async deleteComment(commentId, userId) {
    const comment = await this.getCommentById(commentId)
    if (comment.hopperId != userId){
      throw new Forbidden("Rude comment, go away")
    }
    await comment.remove()
    return
  }

  async getCommentById(commentId) {
    const comment = await dbContext.Comments.findById(commentId)
    if (!comment) {
      throw new BadRequest('No comment')
    }
    return comment
  }

  async createComment(commentData) {
    const newComment = await dbContext.Comments.create(commentData)
    await newComment.populate('bar', 'name img')
    await newComment.populate('hopper', 'name picture')
    return newComment
  }
}

export const commentsService = new CommentsService()