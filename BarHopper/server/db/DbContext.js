import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BarSchema } from "../models/Bar.js";
import { HopperSchema } from "../models/Hopper.js";
import { CommentSchema } from "../models/Comment.js";
import { EventSchema } from "../models/Event.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Bars = mongoose.model('Bar', BarSchema);

  Hoppers = mongoose.model('Hopper', HopperSchema);

  Comments = mongoose.model('Comment', CommentSchema);

  Events = mongoose.model('Event', EventSchema)
}

export const dbContext = new DbContext()
