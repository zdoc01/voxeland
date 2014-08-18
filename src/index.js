var createGame = require('voxel-engine');
var createSnow = require('voxel-snow');
var voxel = require('voxel');

var game = createGame({
	texturePath: 'textures/',
	generate: voxel.generator['Valley']
});
game.appendTo('#container');

var createPlayer = require('voxel-player')(game);
var player = createPlayer('textures/substack.png');
player.possess();	//set the player as the active camera view
player.position.set(0, 20, 0);

var snow = createSnow({
	game: game,
	count: 2000,
	size: 20
});

game.on('tick', function() {
	snow.tick();
});

window.addEventListener('keydown', function (ev) {
	if (ev.keyCode === 'R'.charCodeAt(0)) {
	    player.toggle();	// switch between 1st and 3rd person view
	}
});