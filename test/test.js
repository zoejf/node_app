var request = require('request')
  , expect = require('chai').expect, 
  User = require('../app.js');

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

// describe('Google.com', function() {
//   it('should have a HTTP of 200 - success', function(done) {
//     request('https://google.com/', function(err, res, body) {
//       expect(res.statusCode).to.equal(200)
//       //log stuff to the console
//       console.log("err: " + err + " res: " + res + " body: " + body)

//       // expect(res.statusCode).to.equal(300)
//       done();
//     })
//   })
// });


// describe('Amazon.com', function() {
//   it('should have a HTTP of 200 - success', function(done) {
//     request('https://www.amazon.com/', function(err, res, body) {
//       expect(res.statusCode).to.equal(200)
//       //log stuff to the console
//       console.log("err: " + err + " res: " + res + " body: " + body)
//       done();
//       // expect(res.statusCode).to.equal(300)
 
//     });
//   });
// });

describe('Local host API testing', function() {
  it('should have a console log of err, res and body', function(done) {
    request('http://localhost:3000/users', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      //log stuff to the console
      console.log("err: " + err + " res: " + res + " body: " + body)
      done();
      // expect(res.statusCode).to.equal(300)
 
    });
  });
});


describe('Should add a new item to the users array', function() {
  it('should add a new user and console log the new user', function(done) {
    
      var newUser = {
            id: 3,
            username: "banana",
            firstname: "Ban",
            lastname: "Ana",
            age: 28
          }
    request.post('http://localhost:3000/users', {form: newUser}, function(err, res, body) {
      
      expect(res.statusCode).to.equal(200);

      console.log("New User: " + newUser)

      done();
 
    });
  });
});


describe('Should edit an existing item in the array', function() { 
  it('should add a new user and console log the new user', function(done) {

     var user = {
            id: 3,
            username: "banana",
            firstname: "John",
            lastname: "Lennon",
            age: 28
          }

      request.put('http://localhost:3000/users/3', {form: user}, function(err, res, body) {
      
      expect(res.statusCode).to.equal(200);

      // console.log(users);

      done();
 
      });
    });
  });
