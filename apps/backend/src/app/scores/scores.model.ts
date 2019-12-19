import * as mongoose from 'mongoose';
const schema = mongoose.Schema;
const scoresModel = new schema({
    author:[{
        type: schema.Types.ObjectId, ref: 'student'
    }],
    mon: {
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
    }
  },
  xeploai: {
    type: String
  }
});
export interface scoresModel extends mongoose.document {
  mon: {
    toan: Number;
    Ly: Number;
    Hoa: Number;
  };
  xeploai: String;
}
