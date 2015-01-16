var game = new Phaser.Game(800, 480, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('backdrop', 'remember-me4.jpg');
    game.load.image('Juste', '13974.png');
	game.load.image('monster', '19259.png');
}

var hero;
var cursors;
var monster; 
 
function create() {

    game.world.setBounds(0, 0, 1531, 161);

    game.add.sprite(0, 0, 'backdrop');

    hero = game.add.sprite(-4, 304, 'Juste');
	monster = game.add.sprite(1250, 215, 'monster');
	
    game.camera.follow(hero);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    if (cursors.left.isDown)
    {
        hero.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        hero.x += 4;
    }

    if (cursors.up.isDown)
    {
        hero.y -= 4;
    }
    else if (cursors.down.isDown)
    {
        hero.y += 4;
    }

}

function render() {

    game.debug.cameraInfo(game.camera, 500, 32);
    game.debug.spriteCoords(hero, 32, 32);
    // game.debug.physicsBody(hero.body);

}

