import { api } from "./AxiosService.js"

class CommentsService {


  async getComments() {
    const res = await api.get('api/comments')
    console.log("", res.data);
  }
}

export const commentsService = new CommentsService()