import mongoose, { Schema } from 'mongoose';

const SessionSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: ''
  },

  fromDate: {
    type: String,
    required: true
  },

  toDate: {
    type: String,
    required: true
  },

  timing: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  img: {
    type: String
  }
});

const Session = mongoose.model('Session', SessionSchema);

export default Session;
