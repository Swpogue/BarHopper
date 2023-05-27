import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class CommentsService {


  async getComments() {
    const res = await api.get('api/comments')
    // console.log("", res.data);
    AppState.comments.push(res.data)
    console.log(AppState.comments);
  }
}

export const commentsService = new CommentsService()