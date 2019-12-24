import * as mongoose from 'mongoose';

const schema = mongoose.Schema;
export const scoresModel = new schema({
  Mssv: { type: String, ref: 'student'},
  Toan: {
    type: Number,
    required: true
  },
  Ly: {
    type: Number,
    required: true
  },
  Hoa: {
    type: Number,
    required: true
  },

  diem: {
    type: Number
  }
});
export interface scoresModel extends mongoose.Document {
  readonly author: String;
  readonly Toan: Number;
  readonly Ly: Number;
  readonly Hoa: Number;
  readonly diem: Number;
}
