import * as mongoose from 'mongoose';
const schema = mongoose.Schema
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
  score:[{type:schema.Types.ObjectId, ref:'scores'}]
});

export interface StudentSchema extends mongoose.Document {
  id: String;
  FirstName: String;
  LastName: String;
  Age: String;
  Sex: String;
}
