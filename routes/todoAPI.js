let express = require('express'),
    helper = require('../helpers/todos'),
    router = express.Router();

router.route("/")
      .get(helper.getAllTodos)
      .post(helper.createTodo);

router.route("/:todoid")
      .get(helper.getTodo)
      .put(helper.updateTodo)
      .delete(helper.deleteTodo)

module.exports = router;