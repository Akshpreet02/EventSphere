const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:LYDHCmW2RrFiaWW7@cluster0.kw0emyr.mongodb.net/EventSphere');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    full_name: String,
    role: String
});

const eventSchema = new mongoose.Schema({
  event_name: { type: String, required: true },
  description: { type: String },
  start_time: { type: String, required: true },
  end_time: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  venue: { type: String, required: true },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, required: true, enum: ['planning', 'active', 'completed'] },
  invitations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  rsvp_required: { type: Boolean },
  RSVPs: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['accepted', 'declined', 'pending'] }
  }],
  reviews: [{
    reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    review: { type: String },
    rating: { type: Number, min: 1, max: 5 }
  }]
});

const User = mongoose.model('User', userSchema);
const Event = mongoose.model('Event', eventSchema);

module.exports = {
    User,
    Event,
}