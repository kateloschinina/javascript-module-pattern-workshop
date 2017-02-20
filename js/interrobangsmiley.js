"use strict";

(function(exports) {
  function interrobangsmiley(smiley, exclaim, question, string) {
    return smiley(exclaim(question(string)));
  };

  exports.interrobangsmiley = interrobangsmiley;
})(this);
