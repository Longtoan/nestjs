import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
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
  }
});

export interface Student extends mongoose.Document {
  id: String;
  FirstName: String;
  LastName: String;
  Age: Number;
  Sex: String;
}
