'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/habits')
    .get(todoList.list_all_habits);

  app.route('/habit/user')
    .get(todoList.list_all_habits_from_user);

  app.route('/habit/score')
    .put(todoList.update_a_habit_score);

  app.route('/habit')
    .post(todoList.create_a_habit)
    .get(todoList.read_a_habit)
    .put(todoList.update_a_habit)
    //.put(todoList.update_a_habit_score)
    .delete(todoList.delete_a_habit);
};
