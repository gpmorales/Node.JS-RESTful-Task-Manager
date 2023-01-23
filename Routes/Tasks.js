// Handles all our Routing and the task
const express = require('express');
const Router = express.Router();

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require("../Controllers/Tasks");
// NOTE router is a middleware that allows you to define routes for your application
// It allows you to define different routes for different HTTP methods (such as GET, POST, etc.) and handle them separately
// The router can also handle URL parameters, query strings, and other request details, and then pass them to the appropriate route handler

//Setup Routes
Router.route('/').get(getAllTasks);  //This will be employed for all paths that have the url '/api/v1/tasks'
Router.route('/').post(createTask); //Router employs the createTask() when a POST request is received 
Router.route('/:id').get(getTask); //Router employs the getTask() when a GET request is received for a unique task id
Router.route('/:id').patch(updateTask); //Router employs the updateTask() when a PATCH request is received for a unique task id
Router.route('/:id').delete(deleteTask); //Router employs the updateTask() when a DELETE request is received for a unique task id


module.exports = Router;
