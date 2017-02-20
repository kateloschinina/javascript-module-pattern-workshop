var assert = require('chai').assert;
var smiley = require("../../js/smiley").smiley;
var sinon = require('sinon');

describe("smiley", function () {
  it("returns random smiley, :)", function () {
    sinon.stub(Math, "random", function(){
      return 0;
    });
    assert.equal(smiley(""), ":)");
    Math.random.restore();
  });
});

describe("smiley", function () {
  it("returns random smiley, :D", function () {
    sinon.stub(Math, "random", function(){
      return 1;
    });
    assert.equal(smiley(""), ":D");
    Math.random.restore();
  });
});
