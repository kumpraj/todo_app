const express = require('express');

const { createTodo } = require('../controllers/createTodo');
const { getTodo } = require('../controllers/getTodo');
const { getTodos } = require('../controllers/getTodos');
const { updateTodo } = require('../controllers/updateTodo');
const { deleteTodo } = require('../controllers/deleteTodo');
const { createUser } = require('../controllers/users/createUser');


//  creating a router variable of Router class to define different routes for the application
const router = express.Router();

router.get('/',(req,res) => {
    res.send('<h1>Hello, this is home page of Todo App</h1>');
});

router.post('/createTodo',createTodo);

router.get('/getTodo/:id',getTodo);

router.get('/getTodos',getTodos);

router.delete('/deleteTodo/:id', deleteTodo);

router.put('/updateTodo/:id', updateTodo);

router.post('/createUser',createUser);

module.exports = router;


