import { Schema } from "mongoose";


export const HopperSchema = new Schema(
  {
    barId: { type: Schema.Types.ObjectId, required: true, ref: 'Bar' },
    hopperId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

HopperSchema.virtual('hopper', {
  localField: 'hopperId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'

})

HopperSchema.index({ hopperId: 1, barId: 1 }, { unique: true })