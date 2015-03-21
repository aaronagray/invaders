import Player from './player.js';

var Game = function(canvasId) {
  let canvas    = document.getElementById(canvasId),
      screen    = canvas.getContext('2d'),
      gameSize  = { x: canvas.width, y: canvas.height };

  this.bodies = [new Player(this, gameSize)];

  var tick = () => {
    this.update();
    this.draw(screen, gameSize);
    requestAnimationFrame(tick);
  }

  tick();
}


Game.prototype = {
  update() {
    for (var i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update();
    }
  },

  draw(screen, gameSize) {
    screen.clearRect(0,0,gameSize.x, gameSize.y);
    for (var i = 0; i < this.bodies.length; i++) {
      drawRect(screen, this.bodies[i]);
    }
  }
}

const drawRect = (screen, body) => {
  screen.fillRect(
    body.center.x - body.size.x / 2,
    body.center.y - body.size.y / 2,
    body.size.x, body.size.y
  );
};

export default Game;
