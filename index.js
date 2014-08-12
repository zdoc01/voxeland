var createGame = require('voxel-engine');
var createLand = require('voxel-land');

var game = createGame({
	texturePath: 'textures/'
	// generateChunks: false
});
game.appendTo('#container');

// var land = createLand(game);
// land.enable();

var createPlayer = require('voxel-player')(game);
var player = createPlayer('textures/substack.png');
player.possess();	//set the player as the active camera view
player.position.set(0, 100, 0);

window.addEventListener('keydown', function (ev) {
	if (ev.keyCode === 'R'.charCodeAt(0)) {
	    player.toggle();	// switch between 1st and 3rd person view
	}
});