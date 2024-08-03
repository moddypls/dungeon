class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('tiles', '../assets/tileset.png');
        this.load.tilemapTiledJSON('map', '../assets/map.json');
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'map' });
        
        const tiles = map.addTilesetImage('tileset', 'tiles');

        const layer = map.createLayer(0, tiles, 0, 0);

        help.setScrollFactor(0);
    }

    update (time, delta)
    {
        this.controls.update(delta);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);