import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import VirtualJoystickPlugin from 'phaser3-rex-plugins/plugins/virtualjoystick-plugin.js';

const EmojiPlatformerGame = () => {
    const gameRef = useRef(null);
    const [gameSize, setGameSize] = useState({ width: 800, height: 600 });

    useEffect(() => {
        const handleResize = () => {
            const container = document.getElementById('game-container');
            if (container) {
                const containerWidth = container.clientWidth;
                const containerHeight = container.clientHeight;
                const aspectRatio = 4 / 3;
                let width, height;

                if (containerWidth / containerHeight > aspectRatio) {
                    height = containerHeight;
                    width = height * aspectRatio;
                } else {
                    width = containerWidth;
                    height = width / aspectRatio;
                }

                setGameSize({ width, height });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let game;
        const initPhaser = async () => {
            console.log('Starting Phaser initialization...');
            try {
                const Phaser = (await import('phaser')).default;
                console.log('Phaser imported successfully');
                
                const config = {
                    type: Phaser.AUTO,
                    width: gameSize.width,
                    height: gameSize.height,
                    parent: 'game-container',
                    backgroundColor: '#000000',
                    physics: {
                        default: 'arcade',
                        arcade: {
                            gravity: { y: 300 },
                            debug: false
                        }
                    },
                    scene: {
                        preload: preload,
                        create: create,
                        update: update
                    },
                    scale: {
                        mode: Phaser.Scale.FIT,
                        autoCenter: Phaser.Scale.CENTER_BOTH
                    },
                    plugins: {
                        scene: [{
                            key: 'rexVirtualJoystick',
                            plugin: VirtualJoystickPlugin,
                            mapping: 'rexVirtualJoystick'
                        }]
                    }
                };

                console.log('Config created');

                const PLAYER = '🏃';
                const ZOMBIE = '🧟';
                const PLATFORM = '🟫';

                let player;
                let zombies;
                let platforms;
                let cursors;
                let joystick;
                let score = 0;
                let scoreText;
                let gameOver = false;
                let playerEmoji;
                let zombieEmojis = [];

                function preload() {
                    console.log('Preload function called');
                }

                function create() {
                    console.log('Create function called');
                    // Create joystick
                    joystick = this.rexVirtualJoystick.add(this, {
                        x: 100,
                        y: 500,
                        radius: 50,
                        base: this.add.circle(0, 0, 50, 0x888888),
                        thumb: this.add.circle(0, 0, 25, 0xcccccc),
                    });
                    platforms = this.physics.add.staticGroup();

                    // Create ground
                    for (let i = 0; i < 20; i++) {
                        platforms.create(i * 40, 568, 'platform').setScale(0.5).refreshBody();
                    }

                    // Create some platforms
                    platforms.create(600, 400, 'platform');
                    platforms.create(50, 250, 'platform');
                    platforms.create(750, 220, 'platform');

                    // Replace platform sprites with emojis
                    platforms.children.entries.forEach(platform => {
                        this.add.text(platform.x, platform.y, PLATFORM, { fontSize: '40px' }).setOrigin(0.5);
                        platform.setVisible(false);
                    });

                    // Player
                    player = this.physics.add.sprite(100, 450, 'player');
                    player.setCollideWorldBounds(true);
                    playerEmoji = this.add.text(player.x, player.y, PLAYER, { fontSize: '40px' }).setOrigin(0.5);
                    player.setVisible(false);

                    // Zombies
                    zombies = this.physics.add.group();
                    for (let i = 0; i < 5; i++) {
                        const x = Phaser.Math.Between(0, 800);
                        const y = Phaser.Math.Between(0, 300);
                        const zombie = zombies.create(x, y, 'zombie');
                        zombie.setBounce(1);
                        zombie.setCollideWorldBounds(true);
                        zombie.setVelocity(Phaser.Math.Between(-200, 200), 20);
                        const zombieEmoji = this.add.text(zombie.x, zombie.y, ZOMBIE, { fontSize: '40px' }).setOrigin(0.5);
                        zombieEmojis.push(zombieEmoji);
                        zombie.setVisible(false);
                    }

                    cursors = this.input.keyboard.createCursorKeys();
                    dpadCursors = {
                        up: { isDown: false },
                        down: { isDown: false },
                        left: { isDown: false },
                        right: { isDown: false }
                    };

                    this.physics.add.collider(player, platforms);
                    this.physics.add.collider(zombies, platforms);

                    this.physics.add.overlap(player, zombies, hitZombie, null, this);

                    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '16px', fill: '#0ff' });
                    console.log('Create function completed');
                }

                function update() {
                    if (gameOver) {
                        return;
                    }

                    // Joystick controls
                    if (joystick.left) {
                        player.setVelocityX(-160);
                    } else if (joystick.right) {
                        player.setVelocityX(160);
                    } else {
                        player.setVelocityX(0);
                    }

                    if (joystick.up && player.body.touching.down) {
                        player.setVelocityY(-330);
                    }

                    // Keyboard controls (optional, in addition to joystick)
                    if (cursors.left.isDown) {
                        player.setVelocityX(-160);
                    } else if (cursors.right.isDown) {
                        player.setVelocityX(160);
                    }

                    if (cursors.up.isDown && player.body.touching.down) {
                        player.setVelocityY(-330);
                    }

                    // Move zombies towards player
                    zombies.children.entries.forEach((zombie, index) => {
                        if (zombie.x < player.x) {
                            zombie.setVelocityX(50);
                        } else {
                            zombie.setVelocityX(-50);
                        }
                        zombieEmojis[index].x = zombie.x;
                        zombieEmojis[index].y = zombie.y;
                    });

                    // Update player emoji position
                    playerEmoji.x = player.x;
                    playerEmoji.y = player.y;

                    score += 1;
                    scoreText.setText('Score: ' + score);
                }

                function hitZombie(player, zombie) {
                    this.physics.pause();
                    player.setTint(0xff0000);
                    gameOver = true;
                    this.add.text(400, 300, 'Game Over', { fontSize: '32px', fill: '#f0f' }).setOrigin(0.5);
                }

                if (gameRef.current) {
                    console.log('Creating Phaser game instance');
                    game = new Phaser.Game(config);
                    console.log('Phaser game instance created');
                } else {
                    console.error('gameRef is not available');
                }
            } catch (error) {
                console.error('Error during Phaser initialization:', error);
            }
        };

        initPhaser();

        return () => {
            if (game) {
                console.log('Destroying Phaser game instance');
                game.destroy(true);
            }
        };
    }, []);

    const handleDpadChange = (direction, isPressed) => {
        setDpadControls(prev => ({ ...prev, [direction]: isPressed }));
        if (gameRef.current) {
            dpadCursors[direction].isDown = isPressed;
        }
    };

    return (
        <div className="nes-container is-dark with-title" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <p className="title">Emoji Platformer</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '800px' }}>
                <div id="game-container" style={{ 
                    width: '70%', 
                    height: '80vh', 
                    maxHeight: '600px', 
                    border: '2px solid var(--retro-border)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div ref={gameRef} style={{ width: '100%', height: '100%' }}></div>
                </div>
                <div style={{ width: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <DPadController onDirectionChange={handleDpadChange} />
                    <div className="nes-container is-rounded is-dark" style={{ marginTop: '1rem' }}>
                        <p>Use arrow keys or D-pad to move and jump. Avoid the zombies!</p>
                        <button className="nes-btn is-primary" onClick={() => window.location.reload()}>Restart Game</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(EmojiPlatformerGame), {
    ssr: false
});
