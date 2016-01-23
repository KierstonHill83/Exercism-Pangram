var Pangram = function(str) {
  this.str = str;
};

Pangram.prototype.isPangram = function() {
  var firstStr = this.str.replace(/\s/g, '').toLowerCase();
  var secondStr = firstStr.replace(/\W+/g);
  var newStr = secondStr.split('').sort();
  var result = [];
  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i] !== newStr[i+1]) {
      result.push(newStr[i]);
    }
  }
  if (result.length === 26) {
    return true;
  } else {
    return false;
  }
};

module.exports = Pangram;