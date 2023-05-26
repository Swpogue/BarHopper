import { AppState } from "../AppState.js"
import { commentsService } from "../services/CommentsService.js"
import { Pop } from "../utils/Pop.js"

export class CommentsController {
  constructor() {
    AppState.on('Account', this.getComments)
    // this.getComments()
  }

  async getComments() {
    try {
      await commentsService.getComments()
    } catch (error) {
      Pop.error("error")
    }
  }
}