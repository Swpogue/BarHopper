import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"
import { Comment } from "../models/Comment.js"

class CommentsService {
  getCommentsForActiveBar() {
    const bar = AppState.activeBar
  }


  async getCommentsByBarId() {
    let id = AppState.activeBar?.id
    console.log(id);
    const res = await api.get(`api/comments/bar/${id}`)
    console.log(res.data);
    AppState.comments = res.data.map(c => new Comment(c))
    AppState.emit('comments')
    console.log(AppState.comments);
  }
}

export const commentsService = new CommentsService()