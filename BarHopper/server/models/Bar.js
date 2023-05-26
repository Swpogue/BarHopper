import mongoose from "mongoose";
import { Schema } from "mongoose";

export const BarSchema = new Schema({

  name: { type: String, required: true, minLength: 3, maxLength: 20 },
  description: { type: String, default: '', maxLength: 500 },
  img: { type: String, required: true, maxLength: 500 },
  favoriteColor: {type: String, required: true},
  activities: {type: Array, required: true},
  theme: {type: String, required: true},
  barHopperId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  
  // creatorId: {type: Schema.Types.ObjectId, required: true}

},
  { timestamps: true, toJSON: { virtuals: true } }
)

BarSchema.virtual('barHopper', {
  localField: 'barHopperId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

BarSchema.virtual('hopperCount',{
  localField: '_id',
  foreignField: 'barId',
  ref: 'Hopper',
  count: true
})