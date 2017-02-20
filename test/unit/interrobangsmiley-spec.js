var assert = require('chai').assert;
var sinon = require('sinon');

var smiley = require("../../js/smiley").smiley;
var question = require("../../js/question").question;
var exclaim = require("../../js/exclaim").exclaim;
var interrobangsmiley = require("../../js/interrobangsmiley").interrobangsmiley;

describe("interrobangsmiley", function() {
  it("should add two question marks and an exclamation mark to passed string", function() {
    sinon.stub(Math, "random", function(){
      return 0;
    });
    assert.equal(interrobangsmiley(smiley, exclaim, question, "hello"), "hello??!:)");
    Math.random.restore();
  });
});
