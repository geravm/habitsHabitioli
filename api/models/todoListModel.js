'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var HabitSchema = new Schema({
  email: {
    type: String,
    required: 'Email of user required'
  },
  title: {
    type: String,
    required: 'Title for Habit'
  },
  comments: {
    type: String
  },
  score: {
    type: Number,
    required: 'Score for Habit'
  },
  colour: {
    type: String
  },
  difficulty: {
    type: [{
      type: String,
      enum: ['easy', 'medium', 'hard']
    }],
    default: ['easy']
  },
  goodBad: {
    type: [{
      type: String,
      enum: ['good', 'bad', 'both']
    }],
    default: ['both']
  }
});

module.exports = mongoose.model('Habits', HabitSchema);
