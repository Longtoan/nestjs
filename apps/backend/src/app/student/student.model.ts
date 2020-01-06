import * as mongoose from 'mongoose';
const schema = mongoose.Schema;
export const StudentSchema = new schema({
  Firstname: {
    type: String,
    required: true
  },
  Lastname: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true
  },
  Sex: {
    type: String,
    required: true
  },
  Result: {
    type: String,
    required: true
  }
  // result: [ref: 'scores']
});

export interface StudentSchema extends mongoose.Document {
  readonly Firstname: String;
  readonly Lastname: String;
  readonly Age: number;
  readonly Sex: String;
  readonly Result: String;
}
