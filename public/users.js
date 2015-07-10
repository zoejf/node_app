$(function() {

	function User (id,username,firstname,lastname,age) {
		this.id = id;  //hidden from the html

		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
	}


	// form to create new user
  var $newUser = $('#new-user');

  // element to hold our list of todos
  var $userList = $('#users-section');

  // user underscore template
  var userTemplate = _.template($('#user-template').html());

  //array to store users
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
];

	// append existing users (from API data) to the page
  _.each(users, function (user, index) {
    var $user = $(userTemplate(user));
    $user.attr('data-index', index);
    $userList.append($user);
  });



  // // submit form to create new user
  // $newUser.on('submit', function(event) {
  //   event.preventDefault();

  //   // create new todo object from form data
  //   // var userName = $('#todo-name').val();
  //   // var userDesc = $('#todo-desc').val();
  //   // var userData = {name: toDoName, desc: toDoDesc};

  //   // // store our new todo
  //   // toDos.push(toDoData);
  //   // console.log(toDos);
  //   // var index = toDos.indexOf(toDoData);

  //   // // append our new todo to the page
  //   // var $user = $(userTemplate(toDoData));
  //   // $user.attr('data-index', index);
  //   // $userList.append($todo);

  //   // reset the form
  //   $newUser[0].reset();
  //   $('#new-username').focus();
  // });

});






