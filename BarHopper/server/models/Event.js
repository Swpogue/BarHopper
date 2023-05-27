import { Schema } from "mongoose";

export const EventSchema = new Schema (
  {
    name: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: false},
    info: {type: String, required: false},
    barId: {type: Schema.Types.ObjectId, ref: 'bar', required: true},
    hopperId: {type: Schema.Types.ObjectId, ref: 'Account', required: true}
  },
  {timestamps: true, toJSON: { virtuals: true }}
)

EventSchema.virtual('bar', {
  localField: 'barId',
  foreignField: '_id',
  justOne: true,
  ref: 'Bar'
})

EventSchema.virtual('hopper', {
  localField: 'hopperId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})