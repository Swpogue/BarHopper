import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BarSchema } from "../models/Bar.js";
import { HopperSchema } from "../models/Hopper.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Bars = mongoose.model('Bar', BarSchema);

  Hoppers = mongoose.model('Hopper', HopperSchema);
}

export const dbContext = new DbContext()
