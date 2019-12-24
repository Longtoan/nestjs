import * as mongoose from 'mongoose';
const schema = mongoose.Schema;
export const StudentSchema = new schema({
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
  Mssv: {
    type: String,
    required: true
  }
  // result: [ref: 'scores']
});

export interface StudentSchema extends mongoose.Document {
  readonly FirstName: String;
  readonly LastName: String;
  readonly Age: String;
  readonly Sex: String;
}
