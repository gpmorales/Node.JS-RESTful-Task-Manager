// Task Manager Driver code
const express = require('express');
const app = express();
const Router = require('./Routes/Tasks'); //import Router from Tasks.js
const connectDB = require('./MongoDB/ConnectJS');

const Port = 3000;

// Basic Middlware
app.use(express.static('./FrontEndTemplates'));
app.use(express.json()); //Allows us to deconstruct a JSON body when the server receives a POST request

app.use('/api/v1/tasks', Router);
// NOTE when you call app.use('/url...', router), you are telling Express to USE the ROUTER MIDDLEWARE for ALL ROUTES THAT START WITH THE PATH '/api/v1/tasks'
// This means that whenever a request comes in with a URL that starts with '/api/v1/tasks', Express will check the router to see if there is a matching route defined. 


// app.get('/api/v1/tasks')   - Get All tasks
// app.post('/api/v1/tasks')   - Post A New Task
// app.get('/api/v1/tasks/:id')   - Get A Single Task
// app.patch('/api/v1/tasks/:id')   - Update a Task
// app.delete('/api/v1/tasks/:id')   - Delete a Task


async function Start(){ //Connect to DB and start server
	try{
		await connectDB();
		app.listen(3000, () => {
				console.log("Listening to Port 3000...");
		});
	}
	catch(err){
		console.log(err);
		console.log("Something went wrong connecting to the Server");
	}
}

Start();
