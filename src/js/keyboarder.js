let Keyboarder = function() {
  var keyState = {};

  window.onkeydown = (e) => {
    keyState[e.keyCode] = true;
  };

  window.onkeyup = (e) => {
    keyState[e.keyCode] = false;
  };

  this.isDown = function(code) {
    return keyState[code] === true;
  }

  this.KEYS = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32
  }
}


export default Keyboarder;
