'use strict';


var mongoose = require('mongoose'),
  Habit = mongoose.model('Habits');

exports.list_all_habits = function(req, res) {
  Habit.find({}, function(err, habit) {
    if (err)
      res.send(err);
    res.json(habit);
  });
};

exports.list_all_habits_from_user = function(req, res){
    Habit.find({email : req.query.email}, function(err, habit){
        if (err)
            res.send(err);
        res.json(habit);
    });
};

exports.create_a_habit = function(req, res) {
  var new_habit = new Habit(req.body);
  new_habit.save(function(err, habit) {
    if (err)
      res.send(err);
    res.json(habit);
  });
};


exports.read_a_habit = function(req, res) {
  Habit.find({title:req.query.title, email: req.query.email}, function(err, habit) {
    if (err)
      res.send(err);
    res.json(habit);
  });
};


exports.update_a_habit = function(req, res) {
  Task.findOneAndUpdate({email:req.query.email, title:req.query.title}, req.body, {new: true}, function(err, habit) {
    if (err)
      res.send(err);
    res.json(habit);
  });
};



exports.delete_a_habit = function(req, res) {
  Habit.remove({
    email:req.query.email, title:req.query.title
  }, function(err, habit) {
    if (err)
      res.send(err);
    res.json({ message: 'Habit successfully deleted' });
  });
};
