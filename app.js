var express = require("express");
var app = express();
var _ = require("underscore");
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());

// app.get("/", function (req, res) {
// 	res.sendFile(index.html);
// });

var users = [
	{
		id: 1,
		username: "bobjones",
		firstname: "Bob",
		lastname: "Jones",
		age: 35
	},
	{
		id: 2,
		username: "zoefoss",
		firstname: "Zoe",
		lastname: "Foss",
		age: 28
	}
]

//read (aka view) users
app.get("/users", function (req,res) {
	res.json(users);
});

//read a specific user
app.get("/users/:id", function (req,res) {
	console.log(req.params);
	var id = req.params.id;
	var user = req.params.id;
	res.json(users[id-1]);
});

//create a new user
app.post("/users", function (req, res) {
	var newUser = req.body;
	users.push(newUser)
	res.json(newUser)
});

//update existing user
app.put('/users/:id', function (req, res) {
	//console.log to double check
	console.log("req.body: ", req.body);
	console.log("req.params: ", req.params);
	//set the value of the id
	var userId = parseInt(req.params.id);
	//find item in 'users' array matching the id 
	var targetUser = _.findWhere(users, {id:userId})
	//update the user's username
	targetUser.username = req.body.username;
	//update the user's firstname
	targetUser.firstname = req.body.firstname;
	//update the user's lastname
	targetUser.lastname = req.body.lastname;
	//update the user's age
	targetUser.age = req.body.age;
	//send back edited object
	res.json(targetUser);
});


//delete a user
app.delete('/users/:id', function (req, res) {

	//set the value of the user id
	var userId = parseInt(req.params.id);
	//find item in 'users' array matching the id
	var targetUser = _.findWhere(users, {id:userId});
	//get the index of the found item
	var userIndex = users.indexOf(targetUser);
	//remove the item at that index, only remove 1 item
	users.splice(userIndex,1);
	//send back the deleted object
	res.json(targetUser);
});

app.listen(3000);