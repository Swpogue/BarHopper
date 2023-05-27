import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class EventsService{
  async deleteEvent(eventId, userId) {
    const event = await this.getEventById(eventId)
    if (event.hopperId != userId){
      throw new Forbidden("Authorization Denied")
    }
    await event.remove()
    return event
  }
  async getEventById(eventId) {
    const event = await dbContext.Events.findById(eventId)
    if (!event) {
      throw new BadRequest('Invalid Event Id')
    }
    event.populate('bar', 'name img')
    event.populate('hopper', 'name picture')
    return event
  }
  async postEvent(eventData) {
    const newEvent = await dbContext.Events.create(eventData)
    await newEvent.populate('bar', 'name img')
    await newEvent.populate('hopper', 'name picture')
    return newEvent
  }
  async getEvents(query) {
    const events = await dbContext.Events.find(query)
    .populate('bar', 'name img')
    .populate('hopper', 'name picture')
    return events
  }



}

export const eventsService = new EventsService()