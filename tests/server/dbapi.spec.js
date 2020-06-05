
/*const requireHelper = require('./requireHelper');
const dbapi = requireHelper.require('routes/dbapi');
const assert = require('chai').assert;
const sinon = require('sinon');

// create mock request and response
let reqMock = {};

let resMock = {};
resMock.status = function() {
  return this;
};
resMock.send = function() {
  return this;
};
resMock.end = function() {
  return this;
};
sinon.spy(resMock, "status");
sinon.spy(resMock, "send");


describe('Get Data', function() {

  it('getting valid data', function() {
    reqMock = {
      query: {
        city: "Te Awamutu"
      }
    };

    dbapi.getData(reqMock, resMock);
    console.log("res status is " + resMock.status.length)

    assert.equal("true", "true")
  });

 
}); */
