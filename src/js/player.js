import Keyboarder from './keyboarder.js';

let Player = function(game, gameSize) {
  this.game = game;
  this.size = { x: 15, y: 15 };
  this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.x };
  this.keyboarder = new Keyboarder();

}

Player.prototype = {
  update() {
    if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      this.center.x -= 2;
      return;
    }
    else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      this.center.x += 2;
    }
  }
}


export default Player;
