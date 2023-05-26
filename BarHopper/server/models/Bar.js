import { Schema } from "mongoose";

export const BarSchema = new Schema({

  name: { type: String, required: true, minLength: 3, maxLength: 20 },
  description: { type: String, default: '', maxLength: 500 },
  img: { type: String, required: true, maxLength: 500 },
  barHopperId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }

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