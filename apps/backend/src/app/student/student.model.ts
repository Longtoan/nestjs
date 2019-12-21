import * as mongoose from 'mongoose';
const schema = mongoose.Schema;
import {scoresModel} from "../scores/scores.model";
export const StudentSchema = new schema({
  _id: schema.Types.ObjectId,
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Age: {
    type: String,
    required: true
  },
  Sex: {
    type: String,
    required: true
  },
  // result: [{ type: schema.Types.ObjectId, ref: 'scores' }]
});

export interface StudentSchema extends mongoose.Document {
  readonly FirstName: String;
  readonly LastName: String;
  readonly Age: String;
  readonly Sex: String;
}
