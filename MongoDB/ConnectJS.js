// Connection to our Database will take place here
const mongoose = require('mongoose');

async function connectDB(url){
	try{
		return mongoose.connect("mongodb+srv://gpmoral:gMC20002@cluster0.paxidwi.mongodb.net/TaskManager?retryWrites=true&w=majority", {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		},
			(error, connection) => {
				if(connection){
					console.log("Connected to MongoDB...");
				}
				else if(error){
					console.log("Failed to connect to MongoDB...");
				}
			});
	}
	catch(err){
		console.log(err);
	}
}

module.exports = connectDB;
