var assert = require('assert');
var superagent = require('superagent');

it('should test get /', function(done) {
  superagent.get('localhost:3000').end(function(res){
    console.log(res);
    assert.equal(res.status, 200);
    done();
  });
});

// TODO: write proper unit tests