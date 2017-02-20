"use strict";

(function(exports) {
  function smiley(string) {
    return string + ((Math.random() > 0.5) ? ":D" : ":)");
  }

  exports.smiley = smiley;
})(this);
