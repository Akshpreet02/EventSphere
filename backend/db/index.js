const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:LYDHCmW2RrFiaWW7@cluster0.kw0emyr.mongodb.net/EventSphere');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    full_name: { type: String, required: true },
    role: { type: String, required: true, enum: ['organizer', 'attendee'] }
});
  
const eventSchema = new mongoose.Schema({
  event_name: { type: String, required: true },
  description: { type: String },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  venue: { type: String, required: true },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, required: true, enum: ['planning', 'active', 'completed'] },
  invitations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
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
