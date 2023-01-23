// Define schema and the data models here for our MongoDB
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({ //This is task data object blueprint
	//We will incorperate validators for the values corresp to our keys
	name: {
		type : String,
		required : [true, 'Must Provide A Task Name'],
		trim : true,
		maxLength: [25, 'Task Can Not Be More Than 20 Characters'],
	},

	completed : {
		type : Boolean,
		default : false,
	}

});

const TaskModel = mongoose.model('TaskModel', TaskSchema, 'Tasks'); //Create our Data Object using our schema


module.exports = TaskModel;
