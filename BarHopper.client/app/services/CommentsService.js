import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"
import { Comment } from "../models/Comment.js"

class CommentsService {
  async deleteCommentById(id) {
    const res = await api.delete(`api/comments/${id}`)
    console.log(res.data);
    AppState.comments = AppState.comments.filter(c => c.id != id)
    AppState.emit('comments')
  }
  async createComment(formData) {

    let barId = AppState.activeBar?.id
    let description = formData.description
    let hopperId = AppState.account?.id

    let post = { barId, description, hopperId }

    // console.log(post);
    const res = await api.post('api/comments', post)
    AppState.comments.push(new Comment(res.data))
    AppState.emit('comments')

    // console.log(res.data);

  }
  getCommentsForActiveBar() {
    const bar = AppState.activeBar
  }

  // TODO save the active bar to local storage sometime


  async getCommentsByBarId() {
    let id = AppState.activeBar?.id
    // console.log(id);
    const res = await api.get(`api/comments/bar/${id}`)
    console.log(res.data);
    AppState.comments = res.data.map(c => new Comment(c))
    AppState.emit('comments')
    // console.log(AppState.comments);
  }
}

export const commentsService = new CommentsService()