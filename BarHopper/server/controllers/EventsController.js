import { Auth0Provider } from "@bcwdev/auth0provider";
import { eventsService } from "../services/EventsService.js";
import BaseController from "../utils/BaseController.js";
import { dbContext } from "../db/DbContext.js";

export class EventsController extends BaseController{
  constructor(){
    super('api/events')
    this.router
    .get('', this.getEvents)
    .get('/:eventId', this.getEventById)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.postEvent)
    .delete('/:eventId', this.deleteEvent)
    .put('/:eventId', this.editEvent)
  }
  async getEventById(req, res, next) {
    try {
      const eventId = req.params.eventId
      const event = await eventsService.getEventById(eventId)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }
  async editEvent(req, res, next) {
    try {
      req.body.commentId = req.userInfo.id
      
    } catch (error) {
      next(error)
    }
  }
  async deleteEvent(req, res, next) {
    try {
      const eventId = req.params.eventId
      const userId = req.userInfo.id
      await eventsService.deleteEvent(eventId, userId)
      return res.send(`Event with id:${eventId} has been deleted`)
    } catch (error) {
      next(error)
    }
  }
  async postEvent(req, res, next) {
    try {
      req.body.eventId = req.userInfo.id
      const newEvent = await eventsService.postEvent(req.body)
      res.send(newEvent)
    } catch (error) {
      next(error)
    }
  }
  async getEvents(req, res, next) {
    try {
      const query = req.query
      const events = await eventsService.getEvents(query)
      return res.send(events)
    } catch (error) {
      next(error)
    }
  }
}