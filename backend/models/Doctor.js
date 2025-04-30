const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  consultationFee: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  availableSlots: [{
    day: String,
    times: [String]
  }],
  imageUrl: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Doctor', doctorSchema);