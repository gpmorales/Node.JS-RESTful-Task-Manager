// Our Middleware controllers
// This is the controlling logic for our Router's handlers
const Task = require('../MongoDB/DataModels');

//NOTE DONE
async function getAllTasks(request, response){
	try{
		const allTasks = await Task.find({}, (error, documents) => {
			if(error){
				return response.status(500).json( { msg: error } );
			}
		});
		response.status(200).json([...allTasks]);
	}
	catch(err){
		response.status(500).json({ msg : err });
	}
}


//NOTE DONE
async function createTask(request, response){ //Our route hanlder will employ this when we receive a POST request to "/api/v1/tasks"
	try{
		//Mongoose schema object -> Task -> has a create() method
		const newTask = await Task.create(request.body);
		response.status(201).json( {newTask} );
	}
	catch(err){
		response.status(500).json({ msg : err });
	}
}


//NOTE DONE
async function getTask(request, response){ //retrieve a single task
	try{
		//Mongoose schema object -> Task -> has a find() method
		const targetTask = await Task.find( { _id : request.params.id } );
		if(targetTask == undefined || targetTask == null){
			return response.status(404).json({ msg : "No task with such ID" });
		}
		response.status(201).json(targetTask);
	}
	catch(err){
		response.status(500).json({ msg : err });
	}
}


//NOTE DONE
async function updateTask(request, response){ //Updates a single task
	try{
		//Mongoose schema object -> Task -> findAndUpdate() method
		const newContent = request.body;
		const updatedTask = await Task.findOneAndUpdate(
			{ _id : request.params.id }, 
				newContent,
			{ returnOriginal: false ,
			  runValidators : true    }
		);

		if(updatedTask == null || updatedTask == undefined){
			return response.status(401).json( { msg : "Could not find task" } );
		}

		response.status(200).json(updatedTask);

	}
	catch(err){
		response.status(500).json({ msg : err });
	}
}
	

//NOTE DONE
async function deleteTask(request, response){ //Deletes a task -> find the task
	try{
		//Mongoose schema object -> Task -> has a findOneAndDelete() method
		const deletedTask = await Task.findOneAndDelete( { _id : request.params.id } );
		if(deletedTask == undefined || deletedTask == null){
			return response.status(404).json({ msg : "No task with such ID" });
		}
		response.status(200).json( {deletedTask} );
		//response.status(200).json({ task : null , success : true });
	}
	catch(err){
		response.status(500).json({ msg : err });
	}
}


module.exports = {
	getAllTasks, getTask, createTask, updateTask, deleteTask
};
