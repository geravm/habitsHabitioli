var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://localhost:3000/";
var baseUrl3 = "http://localhost:3000/habit/user";
var baseUrl4 = "http://localhost:3000/habits";
var util = require("util");
var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('Get habit', function(){
	it('Get habit',function(done){
		request.get({url: baseUrl+"habit/?email=rudylepe5&title=Correr"},
			function(error, response, body){

					var bodyObj = JSON.parse(body);
					expect(bodyObj[0].email).to.equal("rudylepe5");
					expect(response.statusCode).to.equal(200);

				done();
			});
	});

  it('Get habit',function(done){
    request.get({url: baseUrl+"habit/?email=rudylepe6&title=Correr"},
      function(error, response, body){

          var bodyObj = JSON.parse(body);
          expect(response.statusCode).to.equal(200);

        done();
      });
  });
});

describe('add_habit()', function(){
    it('Add a habit', function(done){
        chai.request(baseUrl)
        .post('habit')
        .send({
            email: "rudylepe5",
            title: "Comer",
            comments: "Ir a cafeteria",
            score: "20",
            colour: "yellow",
            difficulty: "easy",
            goodBad: "both"
        })
        .end(function(err, res){
            expect(res.body.email).to.equal("rudylepe5");
            done();
        });
    });
});

describe('Create habit', function(){
  it('Create habit',function(done){
    request.post({url: baseUrl+"habit"},
      function(error, response, body){
          expect(response.statusCode).to.equal(200);
        done();
      });
  });
});

describe('Get all habits from user', function(){
  it('Get all habits from user',function(done){
    request.get({url: baseUrl3+"?email=rudylepe5"},
      function(error, response, body){
        var bodyObj = JSON.parse(body);
          //console.log(bodyObj);
          expect(bodyObj[1].title).to.equal("Comer");
          expect(response.statusCode).to.equal(200);
        done();
      });
  });
});

describe('Get all habits', function(){
  it('Get all habits',function(done){
    request.get({url: baseUrl4},
      function(error, response, body){
        var bodyObj = JSON.parse(body);
          console.log(bodyObj);
          expect(response.statusCode).to.equal(200);
        done();
      });
  });
});

/* describe('Delete habit from user', function(){
  it('Delete a habit from user',function(done){
    request.delete({url: baseUrl3+"?email=rudylepe5&title=Comer"},
      function(error, response, body){
        var bodyObj = JSON.parse(body);
          console.log(bodyObj);
          expect(response.statusCode).to.equal(200);
        done();
      });
  });
});
}) */
