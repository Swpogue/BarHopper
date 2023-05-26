import {Schema} from "mongoose";

export const CommentSchema = new Schema ({
  description: {type: String, required:true, minLength: 3, maxLength: 300},
  barId: {type: Schema.Types.ObjectId, ref: 'bar', required: true},
  hopperId: {type: Schema.Types.ObjectId, ref: 'Account', required:true}
},
{timestamps: true, toJSON: { virtuals: true }}
)

CommentSchema.virtual('bar', {
  localField: 'barId',
  foreignField: '_id',
  justOne: true,
  ref: 'Bar'
})

CommentSchema.virtual('hopper', {
  localField: 'hopperId',
  foreignField: '_id',
  justOne: true, 
  ref: 'Account'
})